import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';

import { Separator, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import useRewards from '../hooks/useRewards';
import RewardMessage from '../components/RewardMessage';
import { getFormattedRewardsArray } from '../utils/rewardUtils';

const MyRewardsScreen = ({ navigation }: RootTabScreenProps<'MyRewards'>) => {
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
    const onlyUserRewards = data.filter(({ userId }) => userId === 'Test userID');
    const rewardMessages = getFormattedRewardsArray(onlyUserRewards);
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={Separator}
          data={rewardMessages}
          renderItem={RewardMessage}
        />
      </View>
    );
  }
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

export default MyRewardsScreen;
