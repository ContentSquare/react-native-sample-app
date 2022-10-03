import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect } from 'react';
import { Screens } from '../../../app/navigation/Screens';
import { useNavigation } from '../../../app/navigation/useNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePrivacyManager } from '../../../shared/views/PrivacyManager/usePrivacyManager';

type ScreenConfig = {
  title: string;
  navigationScreen?: Screens;
};

export const useHome = () => {
  const { navigate } = useNavigation();

  const { setIsPrivacyManagerVisible } = usePrivacyManager();

  useEffect(() => {
    (async () => {
      const privacyConsent = await AsyncStorage.getItem('PRIVACY_CONSENT');

      if (privacyConsent === null) {
        setIsPrivacyManagerVisible(true);
      }
    })();
    Contentsquare.send('Home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const screensConfig: ScreenConfig[] = [
    { title: 'Screen views', navigationScreen: Screens.SCREEN_VIEWS },
    { title: 'Privacy', navigationScreen: Screens.PRIVACY },
    { title: 'Dynamic variables' },
    { title: 'Transactions' },
    { title: 'Masking' },
  ];

  const onListItemPress = (screenConfig: ScreenConfig) => {
    screenConfig.navigationScreen && navigate(screenConfig.navigationScreen);
  };

  return { screensConfig, onListItemPress };
};
