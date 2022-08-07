import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import moment from 'moment';
import { Paragraph } from 'react-native-paper';

export interface IRewardMessage {
  userFullName: string;
  userAvatarUrl: string;
  senderFullName: string;
  createdAt: string | Date;
  message: string;
  userId?: string;
  reward: string;
}

const RewardMessage = ({ item }: { item: IRewardMessage }) => {
  const { message, userAvatarUrl, userFullName, senderFullName, createdAt } = item;
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: userAvatarUrl }} />

      <View style={style.rewardInfoContainer}>
        <Paragraph>{`${userFullName} rewarded by ${senderFullName}`}</Paragraph>
        <Paragraph style={style.dateText}>{moment(createdAt).format('MM/DD HH:MM')}</Paragraph>
        <Paragraph>{message}</Paragraph>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    minWidth: '90%',
  },
  rewardInfoContainer: {
    flex: 1,
    padding: 8,
  },
  dateText: {
    fontSize: 12,
    paddingBottom: 4,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default RewardMessage;
