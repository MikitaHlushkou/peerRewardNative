import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, TextInput as Input } from 'react-native-paper';
import { theme } from '../themesConfig/theme';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface CustomTextInputProps extends Omit<TextInputProps, 'theme'> {
  errorText?: string;
  description?: string;
}

const TextInput = ({ errorText, description, ...props }: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Paragraph style={styles.description}>{description}</Paragraph>
      ) : null}
      {errorText ? <Paragraph style={styles.error}>{errorText}</Paragraph> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.text,
  },
  description: {
    fontSize: 13,
    color: theme.colors.text,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export default TextInput;
