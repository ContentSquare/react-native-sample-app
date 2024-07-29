/**
 * @format
 */

import { AppRegistry, AppState } from 'react-native';
import { sendCSMatchingKeyIfNeeded } from './adobe-analytics.ts';
import App from './App';
import { name as appName } from './app.json';

// Listen for app state changes to foreground
AppState.addEventListener('change', nextAppState => {
  if (nextAppState === 'active') {
    sendCSMatchingKeyIfNeeded();
  }
});

AppRegistry.registerComponent(appName, () => App);
