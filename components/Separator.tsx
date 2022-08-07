import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../themesConfig/theme';

export const Separator = () => <View style={style.separator} />;

const style = StyleSheet.create({
  separator: {
    backgroundColor: theme.colors.separator,
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
