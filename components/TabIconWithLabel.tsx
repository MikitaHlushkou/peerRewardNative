import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { ComponentProps } from 'react';

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
      <Text style={tabStyles.label}>{label}</Text>
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
