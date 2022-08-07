import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Paragraph } from 'react-native-paper';
// styles
import { theme } from '../themesConfig/theme';

const Header = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.headerTitle}>Peer Rewards</Paragraph>
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome name="plus" size={25} color={theme.colors.text} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  icon: {
    marginRight: 15,
  },
});

export default Header;
