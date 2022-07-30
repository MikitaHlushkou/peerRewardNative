import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';

import TabIconWithLabel from '../components/TabIconWithLabel';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import FeedScreen from '../screens/FeedScreen';
import MyRewardsScreen from '../screens/MyRewardsScreen';

import LinkingConfiguration from './LinkingConfiguration';
import MyProfileScreen from '../screens/MyProfileScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
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
          title: 'My profile',
          tabBarLabel: ({ color }) => (
            <TabIconWithLabel label={'My Profile'} iconName={'home'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
