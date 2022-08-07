import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';

import Paragraph from '../components/Paragraph';
import Background from '../components/Background';
import { RootTabScreenProps } from '../types';

const MyProfileScreen = ({ navigation }: RootTabScreenProps<'MyProfile'>) => {
  const {
    userData: { accountMoney, sendMoneyAmount, userAvatarUrl, name },
  } = useAuth();
  return (
    <Background>
      <Paragraph style={styles.name}>{name}</Paragraph>
      <Image style={styles.avatar} source={{ uri: userAvatarUrl }} />
      <Paragraph style={styles.title}>My Rewards: $ {accountMoney}</Paragraph>
      <Paragraph style={styles.title}>Give: $ {sendMoneyAmount}</Paragraph>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
  },

  title: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
  },
});

export default MyProfileScreen;
