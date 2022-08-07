import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// screens
import FeedScreen from '../screens/FeedScreen';
import MyRewardsScreen from '../screens/MyRewardsScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
// UI
import TabIconWithLabel from '../components/TabIconWithLabel';
// types
import { RootTabParamList } from '../types';
// styles
import { theme } from '../themesConfig/theme';

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.disabled,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel label={'Feed'} iconName={'list-alt'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRewards"
        component={MyRewardsScreen}
        options={{
          title: 'My rewards',
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel label={'My Rewards'} color={color} iconName={'heart-o'} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarContentContainerStyle: { flex: 1 },
          title: 'My profile',
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel label={'My Profile'} iconName={'home'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
