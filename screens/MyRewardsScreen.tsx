import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';

// hooks
import { useAuth } from '../hooks/useAuth';
// UI
import { Separator } from '../components/Separator';
import RewardMessage from '../components/RewardMessage';
import Background from '../components/Background';
import Paragraph from '../components/Paragraph';
import NoItemsExist from '../components/NoItemsExist';
// utils
import { getFormattedRewardsArray } from '../utils/rewardUtils';
import { getUserRewards } from '../service/rewardsApi';
// types
import { RootTabScreenProps } from '../types';
// styles
import { theme } from '../themesConfig/theme';

const MyRewardsScreen = ({ navigation }: RootTabScreenProps<'MyRewards'>) => {
  const {
    userData: { name },
  } = useAuth();

  const { error, data, status } = useQuery(['userRewards', name], () => getUserRewards(name));

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (status === 'error') {
    if (error instanceof Error) {
      return <Paragraph style={styles.error}> Error: {error?.message}</Paragraph>;
    }
  }
  if (!!data?.length) {
    const rewardMessages = getFormattedRewardsArray(data);
    return (
      <Background>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          data={rewardMessages}
          renderItem={RewardMessage}
        />
      </Background>
    );
  }
  return <NoItemsExist />;
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
  error: {
    color: theme.colors.error,
  },
});

export default MyRewardsScreen;
