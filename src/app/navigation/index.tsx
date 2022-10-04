/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import Contentsquare from '@contentsquare/react-native-bridge';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../../modules/Home/views/Home';
import { Privacy } from '../../modules/Privacy/views/Privacy';
import { PrivacyManager } from '../../shared/views/PrivacyManager/PrivacyManager';
import { ScreenViews } from '../../modules/ScreenViews/ScreenViews';
import { BasicScreenView } from '../../modules/ScreenViews/views/BasicScreenView';
import { ModalScreenView } from '../../modules/ScreenViews/views/ModalScreenView';
import { PagedScrollView } from '../../modules/ScreenViews/views/PagedScrollView';
import { PageTabView } from '../../modules/ScreenViews/views/PageTabView';
import { Screens } from './Screens';
import { RootStackParamList } from './types';

const screenEventByScreenName: Record<string, string> = {
  Home: 'Showcases',
  ScreenViews: 'Screen views',
  BasicScreenView: 'Default screen view demo page',
};

export const Navigation = () => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const routeNameRef = React.useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        if (currentRouteName && screenEventByScreenName[currentRouteName]) {
          Contentsquare.send(screenEventByScreenName[currentRouteName]);
        }
      }}
      onStateChange={() => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName;
        if (currentRouteName && screenEventByScreenName[currentRouteName]) {
          Contentsquare.send(screenEventByScreenName[currentRouteName]);
        }
      }}>
      <RootNavigator />
      <PrivacyManager />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HOME}
        component={Home}
        options={{ title: 'Showcases' }}
      />
      <Stack.Screen
        name={Screens.SCREEN_VIEWS}
        component={ScreenViews}
        options={{ title: 'Screen views' }}
      />
      <Stack.Screen
        name={Screens.PRIVACY}
        component={Privacy}
        options={{ title: 'Privacy' }}
      />
      <Stack.Screen
        name={Screens.BASIC_SCREEN_VIEW}
        component={BasicScreenView}
        options={{ title: 'Basic screen views' }}
      />
      <Stack.Screen
        name={Screens.PAGED_SCROLL_VIEW}
        component={PagedScrollView}
        options={{ title: 'Paged scroll view' }}
      />
      <Stack.Screen
        name={Screens.MODAL_SCREEN_VIEW}
        component={ModalScreenView}
        options={{ title: 'Modal presenter' }}
      />
      <Stack.Screen
        name={Screens.PAGE_TAB_VIEW}
        component={PageTabView}
        options={{ title: 'Tab view' }}
      />
    </Stack.Navigator>
  );
};
