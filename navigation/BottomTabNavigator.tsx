import React from 'react';
import { Pressable } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import FeedScreen from '../screens/FeedScreen';
import MyRewardsScreen from '../screens/MyRewardsScreen';
import MyProfileScreen from '../screens/MyProfileScreen';

import { FontAwesome } from '@expo/vector-icons';
import TabIconWithLabel from '../components/TabIconWithLabel';
import { RootTabParamList, RootTabScreenProps } from '../types';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarInactiveTintColor: Colors[colorScheme].disabled,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={({ navigation }: RootTabScreenProps<'Feed'>) => ({
          title: 'Feed',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel label={'Feed'} iconName={'list-alt'} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="MyRewards"
        component={MyRewardsScreen}
        options={{
          title: 'My rewards',
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel color={color} iconName={'heart-o'} label={'My Rewards'} />
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
