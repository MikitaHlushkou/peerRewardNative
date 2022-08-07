import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { theme } from '../themesConfig/theme';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <ImageBackground
      source={require('../assets/images/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background;
