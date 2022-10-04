/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../../modules/Home/views/Home';
import { Privacy } from '../../modules/Privacy/views/Privacy';
import { PrivacyManager } from '../../shared/views/PrivacyManager/PrivacyManager';
import { ScreenViews } from '../../modules/ScreenViews/ScreenViews';
import { BasicScreenView } from '../../modules/ScreenViews/views/BasicScreenView';
import { PagedScrollView } from '../../modules/ScreenViews/views/PagedScrollView';
import { Screens } from './Screens';
import { RootStackParamList } from './types';

export const Navigation = () => {
  return (
    <NavigationContainer>
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
    </Stack.Navigator>
  );
};
