import React, { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Paragraph } from 'react-native-paper';

interface ITabIconWithLabel {
  color: string;
  iconName: ComponentProps<typeof FontAwesome>['name'];
  label: string;
  size?: number;
}

const TabIconWithLabel = ({ color, iconName, label, size = 30 }: ITabIconWithLabel) => {
  const tabStyles = styles(color);
  return (
    <View style={tabStyles.container}>
      <FontAwesome size={size} style={tabStyles.icon} name={iconName} color={color} />
      <Paragraph style={tabStyles.label}>{label}</Paragraph>
    </View>
  );
};

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    icon: {
      marginBottom: -3,
    },
    label: {
      color: color ?? '',
    },
  });

export default TabIconWithLabel;
