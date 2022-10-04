import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { usePrivacyManagerModal } from '../../../shared/views/PrivacyManager/usePrivacyManagerModal';

export const usePrivacy = () => {
  const { setIsPrivacyManagerVisible } = usePrivacyManagerModal();

  useEffect(() => {
    Contentsquare.send('Privacy');
  }, []);

  const showPrivacyManager = () => {
    setIsPrivacyManagerVisible(true);
  };

  const stopTracking = () => {
    Contentsquare.stopTracking();
  };
  const resumeTracking = () => {
    Contentsquare.resumeTracking();
  };
  const forgetUser = () => {
    Contentsquare.forgetMe();
  };
  const showUserId = () => {
    Contentsquare.getUserId((userId: string) => {
      Alert.alert('Contentsquare user ID', userId);
    });
  };

  return {
    showPrivacyManager,
    stopTracking,
    resumeTracking,
    forgetUser,
    showUserId,
  };
};
