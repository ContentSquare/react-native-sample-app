/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../../modules/Home/views/Home";
import { Privacy } from "../../modules/Privacy/views/Privacy";
import { PrivacyManager } from "../../shared/views/PrivacyManager/PrivacyManager";
import { Screens } from "./Screens";
import { RootStackParamList } from "./types";
import { BasicScreenView } from "../../modules/ScreenViews/views/BasicScreenView";

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
        options={{ title: "Showcases" }}
      />
      <Stack.Screen
        name={Screens.SCREEN_VIEWS}
        component={BasicScreenView}
        options={{ title: "Screen view" }}
      />
      <Stack.Screen
        name={Screens.PRIVACY}
        component={Privacy}
        options={{ title: "Privacy" }}
      />
      <Stack.Screen
        name={Screens.WEBVIEWS}
        component={Webviews}
        options={{ title: 'Webviews' }}
      />
    </Stack.Navigator>
  );
};
