import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { Separator, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { mockedRewards } from '../mocks/MOCK_DATA';
import RewardMessage, { IRewardMessage } from '../components/RewardMessage';

const FeedScreen = ({ navigation }: RootTabScreenProps<'Feed'>) => {
  // Add message id for key
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
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
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
    height: 'fit-content',
  },
});

export default FeedScreen;
