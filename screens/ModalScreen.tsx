import React from 'react';
import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { IRewardMessage } from '../components/RewardMessage';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { useAuth } from '../hooks/useAuth';
import { addNewReward, fetchUserAccount } from '../service/rewardsApi';

import { RootStackScreenProps } from '../types';

interface IRewardForm {
  name: string;
  reward: string;
  message: string;
}

const validationSchema = (maxReward: string) =>
  object({
    name: string().required('Please Provide Name'),
    message: string(),
    reward: number()
      .max(+maxReward, `You are limited with ${maxReward}`)
      .required('Reward is Required'),
  });

export default function ModalScreen({ navigation }: RootStackScreenProps<'Modal'>) {
  const {
    userData: { id, name: UserFullName, userAvatarUrl, accountMoney },
    setUserData,
  } = useAuth();

  const queryClient = useQueryClient();

  const initialFormValues = { name: '', reward: '', message: '' };

  const { mutate, isSuccess } = useMutation(addNewReward, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userRewards']);
      queryClient.invalidateQueries(['rewards']);
    },
  });

  useQuery(['fetchUserAccount', id], () => fetchUserAccount(id), {
    enabled: isSuccess,
    onSuccess: (data) => {
      setUserData((prevState) => ({ ...prevState, ...data }));
      navigation.navigate('Root');
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema(accountMoney),
    onSubmit: (formValues: IRewardForm) => {
      const { name, reward } = formValues;

      const rewardEntity: IRewardMessage = {
        ...formValues,
        userAvatarUrl,
        senderFullName: UserFullName,
        userFullName: name,
        createdAt: new Date(),
        userId: id,
        reward,
      };
      mutate(rewardEntity);
    },
  });

  const handleSubmitForm = () => handleSubmit();

  const { name, reward, message } = values;
  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Paragraph style={styles.title}>Reward a Person. You have $ {accountMoney} </Paragraph>
            <TextInput
              label="To"
              key={'name'}
              returnKeyType="next"
              nativeID={'RewardName'}
              textContentType="name"
              error={!!errors.name}
              errorText={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={name}
            />

            <TextInput
              label="Reward"
              returnKeyType="next"
              keyboardType={'number-pad'}
              key={'reward'}
              error={!!errors.reward}
              errorText={errors.reward}
              nativeID={'reward'}
              onChangeText={handleChange('reward')}
              onBlur={handleBlur('reward')}
              value={reward}
            />
            <TextInput
              label={'Why?'}
              key={'message'}
              returnKeyType="done"
              nativeID={'message'}
              error={!!errors.message}
              errorText={errors.message}
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              editable
              multiline
              value={message}
            />

            <Button mode="contained" onPress={handleSubmitForm}>
              Submit
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
});
