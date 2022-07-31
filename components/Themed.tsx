import { Text as DefaultText, TextInput, TextInputProps, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import React from 'react';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ModalView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'modalBackground');

  return <DefaultView style={[{ backgroundColor, flex: 1 }, style]} {...otherProps} />;
}

export const Separator = () => {
  return (
    <View
      style={{ marginVertical: 10, height: 1, width: '100%' }}
      lightColor="rgba(255,255,255,0.1)"
      darkColor="#eee"
    />
  );
};

export const ThemedInput = (props: TextInputProps) => {
  const colorScheme = useColorScheme();
  const { style, ...nonStyleProps } = props;
  return (
    <TextInput
      style={[
        {
          color: Colors[colorScheme].text,
          backgroundColor: Colors[colorScheme].inputBackground,
        },
        style,
      ]}
      {...nonStyleProps}
    />
  );
};
