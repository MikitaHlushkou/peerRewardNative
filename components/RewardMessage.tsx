import { Image, StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import moment from 'moment';

export interface IRewardMessage {
  userFullName: string;
  userAvatarUrl: string;
  senderFullName: string;
  createdAt: string | Date;
  message: string;
}

const RewardMessage = ({ item }: { item: IRewardMessage }) => {
  const { message, userAvatarUrl, userFullName, senderFullName, createdAt } = item;
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: userAvatarUrl }} />

      <View style={style.rewardInfoContainer}>
        <Text>{`${userFullName} rewarded by ${senderFullName}`}</Text>
        <Text style={style.dateText}>{moment(createdAt).format('MM/DD HH:MM')}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  rewardInfoContainer: {
    padding: 8,
    maxWidth: '85%',
  },
  dateText: {
    fontSize: 12,
    paddingBottom: 4,
  },
  image: {
    width: 40,
    height: 40,
  },
  message: {},
});

export default RewardMessage;
