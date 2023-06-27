/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { updateCsMatchingKey } from './adobe-analytics';

updateCsMatchingKey();

AppRegistry.registerComponent(appName, () => App);
