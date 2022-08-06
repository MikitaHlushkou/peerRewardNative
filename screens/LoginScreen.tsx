import React from 'react';
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

const validationSchema = object({
  email: string().required('Please Enter your email'),
  password: string().required('Please Enter your password'),
});

const LoginScreen = ({ navigation }: RootStackScreenProps<'LoginScreen'>) => {
  const { handleChange, handleBlur, values, errors, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
    },
  });

  const handleLoginClick = () => handleSubmit();

  const handleSignUpClick = () => navigation.replace('RegisterScreen');

  const { email, password } = values;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Text>Welcome back.</Text>
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
