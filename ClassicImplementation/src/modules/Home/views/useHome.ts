import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Screens } from '../../../app/navigation/Screens';
import { ScreenConfig } from '../../../shared/views/NavigationList/NavigationList';
import { usePrivacyManagerModal } from '../../../shared/views/PrivacyManager/usePrivacyManagerModal';

export const useHome = () => {
  const { setIsPrivacyManagerVisible } = usePrivacyManagerModal();

  useEffect(() => {
    /**
     * In this sample app, we are implementing an internal privacy mechanism similar to what you might have.
     * Here, we show a banner whenever privacy consent has never been given, when you open the app.
     */

    (async () => {
      const privacyConsent = await AsyncStorage.getItem('PRIVACY_CONSENT');

      if (privacyConsent === null) {
        setIsPrivacyManagerVisible(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const screensConfig: ScreenConfig[] = [
    {
      title: 'Screen views',
      navigationScreen: Screens.SCREEN_VIEWS,
    },
    {
      title: 'Privacy',
      navigationScreen: Screens.PRIVACY,
    },
    {
      title: 'Custom variables',
      navigationScreen: Screens.CUSTOM_VARIABLES,
    },
    {
      title: 'Dynamic variables',
      navigationScreen: Screens.DYNAMIC_VARIABLES,
    },
    {
      title: 'Transactions',
      navigationScreen: Screens.TRANSACTIONS,
    },
    {
      title: 'Webviews',
      navigationScreen: Screens.WEBVIEWS,
    },
    {
      title: 'Session replay',
      navigationScreen: Screens.SESSION_REPLAY_VIEWS,
    },
    {
      title: 'Workarounds',
      navigationScreen: Screens.WORKAROUNDS,
    },
    {
      title: 'Error Analysis',
      navigationScreen: Screens.ERROR_ANALYSIS,
    },
  ];

  return { screensConfig };
};
