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
import { Navigation } from './src/app/navigation';
import { useAppInit } from './src/app/useAppInit';
import { PrivacyManagerProvider } from './src/shared/views/PrivacyManager/usePrivacyManager';

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
