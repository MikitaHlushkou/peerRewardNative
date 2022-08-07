import React from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import { RootStackScreenProps } from '../types';
import Paragraph from '../components/Paragraph';

const StartScreen = ({ navigation }: RootStackScreenProps<'StartScreen'>) => {
  const handleLoginClick = () => navigation.navigate('LoginScreen');
  const handleSignUpClick = () => navigation.navigate('RegisterScreen');

  return (
    <Background>
      <Paragraph>Welcome to Peer Rewards</Paragraph>
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
