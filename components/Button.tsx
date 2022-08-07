import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../themesConfig/theme';

interface CustomButtonProps {
  mode: 'outlined' | 'contained';
  style?: ViewStyle;
  children?: ReactNode;
  onPress?: () => void;
}
const Button = ({ mode, style, children, ...props }: CustomButtonProps) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.text,
        },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.text,
  },
});

export default Button;
