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
import { enableScreens } from 'react-native-screens';
import { Navigation } from './src/app/navigation';
import { useAppInit } from './src/app/useAppInit';
import { PrivacyManagerProvider } from './src/shared/views/PrivacyManager/usePrivacyManagerModal';

// Enable native screens for better performance with React Navigation v7
enableScreens(true);

const App = () => {
  const { isLoadingComplete } = useAppInit();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PrivacyManagerProvider>
        <Navigation />
      </PrivacyManagerProvider>
    );
  }
};

export default App;
