import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Separator, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import RewardMessage from '../components/RewardMessage';
import useRewards from '../hooks/useRewards';

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
  const rewardMessages = data?.map(
    ({ userFullName, userAvatarUrl, senderFullName, createdAt, message }) => ({
      userFullName,
      userAvatarUrl,
      senderFullName,
      createdAt,
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
