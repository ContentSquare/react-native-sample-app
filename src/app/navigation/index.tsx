/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../../modules/Home/views/Home';
import { ScreenViews } from '../../modules/ScreenViews/views/ScreenViews';
import { Screens } from './Screens';
import { RootStackParamList } from './types';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
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
    </Stack.Navigator>
  );
};
