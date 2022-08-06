import React from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// UI
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
// Types
import { RootStackScreenProps } from '../types';
// Styles
import { theme } from '../themesConfig/theme';

const validationSchema = object({
  name: string().required('Name is required'),
  email: string().required('Email is required'),
  password: string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const RegisterScreen = ({ navigation }: RootStackScreenProps<'RegisterScreen'>) => {
  const { handleChange, handleBlur, values, errors, handleSubmit } = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
    },
  });

  const handleSignUpClick = () => handleSubmit();

  const handleLoginClick = () => navigation.replace('LoginScreen');

  const { name, email, password } = values;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Text>Create Account</Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        error={!!errors.name}
        errorText={errors.name}
        key={'name'}
        nativeID={'name'}
        onChangeText={handleChange('name')}
        onBlur={handleBlur(name)}
        value={name}
      />
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
      <Button mode="contained" onPress={handleSignUpClick} style={{ marginTop: 24 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={handleLoginClick}>
          <Text style={styles.link}>Login</Text>
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
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
