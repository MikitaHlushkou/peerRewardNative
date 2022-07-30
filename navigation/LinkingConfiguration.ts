import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Feed: {
            screens: {
              FeedScreen: 'Feed/',
            },
          },
          MyRewards: {
            screens: {
              MyRewardsScreen: 'Rewards',
            },
          },
          MyProfile: {
            screens: {
              myProfile: 'test',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
