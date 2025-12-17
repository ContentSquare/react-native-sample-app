import {CSQ} from '@contentsquare/react-native-bridge';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {usePrivacyManagerModal} from './usePrivacyManagerModal';

export const usePrivacyManager = () => {
  const {isPrivacyManagerVisible, setIsPrivacyManagerVisible} =
    usePrivacyManagerModal();

  const [isContentSquareActive, setIsContentSquareActive] = useState(false);

  useEffect(() => {
    (async () => {
      const privacyConsent = await AsyncStorage.getItem('PRIVACY_CONSENT');

      setIsContentSquareActive(JSON.parse(privacyConsent ?? 'false'));
    })();
  }, [isPrivacyManagerVisible]);

  const onContentSquareActiveChange = (value: boolean) => {
    setIsContentSquareActive(value);
  };

  const onAcceptAllPress = () => {
    setIsContentSquareActive(true);

    // Here we register the user consent for tracking
    // the others SDK (if any) should also be activated
    CSQ.start();
    CSQ.optIn();
    AsyncStorage.setItem('PRIVACY_CONSENT', 'true');
    setIsPrivacyManagerVisible(false);
  };

  const onRefuseAllPress = () => {
    setIsContentSquareActive(false);

    // Here we register the user refusing tracking
    // the others SDK (if any) should also be deactivated
    CSQ.optOut();
    AsyncStorage.setItem('PRIVACY_CONSENT', 'false');
    setIsPrivacyManagerVisible(false);
  };

  const onSubmit = () => {
    if (isContentSquareActive) {
      CSQ.start();
      CSQ.optIn();
    } else {
      CSQ.optOut();
    }
    AsyncStorage.setItem('PRIVACY_CONSENT', isContentSquareActive.toString());
    setIsPrivacyManagerVisible(false);
  };

  return {
    isPrivacyManagerVisible,
    setIsPrivacyManagerVisible,
    isContentSquareActive,
    onContentSquareActiveChange,
    onAcceptAllPress,
    onRefuseAllPress,
    onSubmit,
  };
};
