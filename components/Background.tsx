import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '../themesConfig/theme';
import { useHeaderHeight } from '@react-navigation/elements';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const height = useHeaderHeight();
  return (
    <ImageBackground
      source={require('../assets/images/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={height}
        enabled
      >
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
