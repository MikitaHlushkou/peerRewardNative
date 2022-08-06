import React from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import { Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';

const StartScreen = ({ navigation }: RootStackScreenProps<'StartScreen'>) => {
  const handleLoginClick = () => navigation.navigate('LoginScreen');
  const handleSignUpClick = () => navigation.navigate('RegisterScreen');

  return (
    <Background>
      <Text>Welcome to Peer Rewards</Text>
      <Button mode="contained" onPress={handleLoginClick}>
        Login
      </Button>
      <Button mode="outlined" onPress={handleSignUpClick}>
        Sign Up
      </Button>
    </Background>
  );
};

export default StartScreen;
