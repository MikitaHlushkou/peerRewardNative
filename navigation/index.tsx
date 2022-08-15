import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';

import BottomTabNavigator from './BottomTabNavigator';
// Screens
import StartScreen from '../screens/StartScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';

// UI
import Header from '../components/Header';

import { RootStackParamList } from '../types';
import { useAuth } from '../hooks/useAuth';

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
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{
              headerShown: true,
              header: Header,
            }}
          />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </>
  );
}
