import React, { useState } from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
// UI
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
// Types
import { RootStackScreenProps } from '../types';
// Styles
import { theme } from '../themesConfig/theme';
import { useMutation } from '@tanstack/react-query';
import { login } from '../service/rewardsApi';
import { useAuth } from '../hooks/useAuth';
import Paragraph from '../components/Paragraph';

const validationSchema = object({
  email: string().required('Please Enter your email'),
  password: string().required('Please Enter your password'),
});

const LoginScreen = ({ navigation }: RootStackScreenProps<'LoginScreen'>) => {
  const { setUserData } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const { data, mutate } = useMutation(login);

  const { handleChange, handleBlur, values, errors, handleSubmit, setErrors } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
      mutate(values, {
        onError: (e) => {
          setErrorMessage(e?.response?.data?.message);
        },
        onSuccess: (data) => {
          setUserData(data);
        },
      });
    },
  });

  const handleLoginClick = () => handleSubmit();

  const handleSignUpClick = () => navigation.replace('RegisterScreen');

  const { email, password } = values;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      {errorMessage ? (
        <Paragraph style={styles.error}>{errorMessage}</Paragraph>
      ) : (
        <Paragraph>Welcome back.</Paragraph>
      )}
      <TextInput
        label="Email"
        returnKeyType="next"
        error={!!errors.email}
        errorText={errors.email}
        autoCapitalize="none"
        autoComplete={'email'}
        textContentType="emailAddress"
        keyboardType="email-address"
        key={'email'}
        nativeID={'email'}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={email}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        error={!!errors.password}
        errorText={errors.password}
        secureTextEntry
        key={'password'}
        nativeID={'password'}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={password}
      />
      <Button mode="contained" onPress={handleLoginClick}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleSignUpClick}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  error: {
    fontSize: 18,
    color: theme.colors.error,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;
