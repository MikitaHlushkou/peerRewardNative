import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '../types';
import Paragraph from '../components/Paragraph';

const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.title}>This screen doesn't exist.</Paragraph>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Paragraph style={styles.linkText}>Go to home screen!</Paragraph>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFoundScreen;
