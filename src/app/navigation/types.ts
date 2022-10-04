/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from './Screens';

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.SCREEN_VIEWS]: undefined;
  [Screens.PRIVACY]: undefined;
  [Screens.BASIC_SCREEN_VIEW]: undefined;
  [Screens.PAGED_SCROLL_VIEW]: undefined;
};

export type RootNavigatorNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type ScreenNamesList = keyof RootStackParamList;
