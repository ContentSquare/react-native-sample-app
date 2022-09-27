/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ScreenViews: undefined;
};

export type RootNavigatorNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type ScreenNamesList = keyof RootStackParamList;
