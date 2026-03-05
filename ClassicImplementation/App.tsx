/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/app/navigation';
import {useAppInit} from './src/app/useAppInit';
import {PrivacyManagerProvider} from './src/shared/views/PrivacyManager/usePrivacyManagerModal';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {isLoadingComplete} = useAppInit();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PrivacyManagerProvider>
        <Navigation />
      </PrivacyManagerProvider>
    </SafeAreaProvider>
  );
};

export default App;

/////////
