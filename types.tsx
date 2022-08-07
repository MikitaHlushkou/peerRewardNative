import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs/lib/typescript/src/types';
import { Dispatch, SetStateAction } from 'react';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  StartScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Feed: undefined;
  MyRewards: undefined;
  MyProfile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  MaterialBottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type Nullable<T> = T | null;
export type StateHandler<T> = Dispatch<SetStateAction<T>>;
export type EmptyObject = Record<string, never>;
