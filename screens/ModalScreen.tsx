import {
  Button,
  GestureResponderEvent,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFormik } from 'formik';

import { ModalView, Text, ThemedInput, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { addNewReward } from '../service/rewardsApi';
import { IRewardMessage } from '../components/RewardMessage';

interface IRewardForm {
  name: string;
  reward: string;
  message: string;
}

export default function ModalScreen({ navigation }: RootStackScreenProps<'Modal'>) {
  const initialFormValues = { name: '', reward: '', message: '' };

  const mutation = useMutation(addNewReward);

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: initialFormValues,
    onSubmit: (formValues: IRewardForm) => {
      navigation.navigate('Root');
      const reward: IRewardMessage = {
        ...formValues,
        userAvatarUrl: 'https://robohash.org/facerevoluptatemquia.png?size=50x50&set=set1',
        senderFullName: 'new test full name',
        userFullName: 'jacob jss',
        createdAt: new Date(),
        userId: 'Jacob',
      };
      mutation.mutate(reward);

      console.log('form values', formValues);
    },
  });

  const handleSubmitForm = (e: GestureResponderEvent) => handleSubmit();

  const { name, reward, message } = values;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ModalView style={styles.container}>
          <Text style={styles.title}>Reward a Person </Text>
          <ThemedInput
            style={styles.input}
            key={'name'}
            nativeID={'name'}
            placeholder={'Name of awarded person'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur(name)}
            value={name}
          />
          <ThemedInput
            style={styles.input}
            keyboardType={'number-pad'}
            key={'reward'}
            nativeID={'reward'}
            placeholder={'Reward'}
            onChangeText={handleChange('reward')}
            onBlur={handleBlur(reward)}
            value={`${reward}`}
          />
          <ThemedInput
            style={styles.textForm}
            key={'message'}
            nativeID={'message'}
            onChangeText={handleChange('message')}
            onBlur={handleBlur('message')}
            placeholder={'Comment'}
            editable
            multiline
            value={message}
          />
          <View style={styles.buttonContainer}>
            <Button color={'#2196f3'} onPress={handleSubmitForm} title="Submit" />
          </View>
        </ModalView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderRadius: 20,
    borderColor: '#2196f3',
    borderWidth: 3,
    marginVertical: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  textForm: {
    borderRadius: 20,
    borderColor: '#2196f3',
    borderWidth: 3,
    marginVertical: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 10,
  },
});
