import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Separator, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RewardMessage, { IRewardMessage } from '../components/RewardMessage';
import { mockedRewards } from '../mocks/MOCK_DATA';

const MyProfileScreen = ({ navigation }: RootTabScreenProps<'MyProfile'>) => {
  // Add message id for key and filter for userId
  const rewardMessages: IRewardMessage[] = mockedRewards.map(
    ({ userFullName, userAvatarUrl, senderFullName, createDate, message }) => ({
      userFullName,
      userAvatarUrl,
      senderFullName,
      createDate,
      message,
    }),
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={Separator}
          data={rewardMessages}
          renderItem={RewardMessage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyProfileScreen;
