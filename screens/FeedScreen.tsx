import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
// hooks
import useRewards from '../hooks/useRewards';
// UI
import { Separator } from '../components/Separator';
import Background from '../components/Background';
import RewardMessage from '../components/RewardMessage';
import { getFormattedRewardsArray } from '../utils/rewardUtils';
import { RootTabScreenProps } from '../types';

const FeedScreen = ({ navigation }: RootTabScreenProps<'Feed'>) => {
  const { error, status, data } = useRewards();

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (status === 'error') {
    if (error instanceof Error) {
      return <Text style={{ color: 'white' }}> Error: {error?.message}</Text>;
    }
  }
  if (data) {
    const rewardMessages = getFormattedRewardsArray(data);
    return (
      <Background>
        <FlatList
          style={styles.container}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          data={rewardMessages}
          renderItem={RewardMessage}
        />
      </Background>
    );
  }
  return <Text> No Items Presented</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default FeedScreen;
