import { Image, StyleSheet, View } from 'react-native';
import { Text } from './Themed';

interface IRewardMessage {
  userFullName: string;
  userAvatarUrl: string;
  senderFullName: string;
  createDate: string;
  message: string;
}

const RewardMessage = ({
  message,
  userAvatarUrl,
  userFullName,
  senderFullName,
  createDate,
}: IRewardMessage) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: userAvatarUrl }} />

      <View>
        <Text>{`${userFullName} rewarded by ${senderFullName}`}</Text>
        <Text>{createDate}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  dateText: {
    fontSize: '12px',
    marginBottom: '4px',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default RewardMessage;
