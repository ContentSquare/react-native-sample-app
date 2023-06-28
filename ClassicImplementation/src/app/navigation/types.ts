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
  [Screens.WORKAROUNDS]: undefined;
  [Screens.PAN_RESPONDER]: undefined;
  [Screens.BASIC_SCREEN_VIEW]: undefined;
  [Screens.PAGED_SCROLL_VIEW]: undefined;
  [Screens.MODAL_SCREEN_VIEW]: undefined;
  [Screens.PAGE_TAB_VIEW]: undefined;
  [Screens.DYNAMIC_VARIABLES]: undefined;
  [Screens.TRANSACTIONS]: undefined;
  [Screens.WEBVIEWS]: undefined;
  [Screens.SESSION_REPLAY_VIEWS]: undefined;
  [Screens.SESSION_REPLAY_MASKING]: undefined;
  [Screens.SESSION_REPLAY_LINKING]: undefined;
  [Screens.CUSTOM_VARIABLES]: undefined;
};

export type RootNavigatorNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type ScreenNamesList = keyof RootStackParamList;
