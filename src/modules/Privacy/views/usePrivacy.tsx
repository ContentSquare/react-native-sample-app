import Contentsquare from '@contentsquare/react-native-bridge';
import AsyncStorage from '@react-native-community/async-storage';
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

  /**
   * Although we do not gather any humanly readable text from the user's screens,
   * we understand that there may be some areas that you want to completely exclude from tracking.
   * For this reason we also support pausing and resuming the complete tracking mechanism.
   */
  const stopTracking = () => {
    Contentsquare.stopTracking();
  };
  const resumeTracking = () => {
    Contentsquare.resumeTracking();
  };
  const forgetUser = () => {
    /**
     * Permanently breaking the link between the collected data and actual user.
     * If the user is opted in, next time the user starts the app,
     * the SDK will re-start its collection mechanisms as if this was the first ever run for a new user, under a new user ID.
     */
    Contentsquare.forgetMe();
    AsyncStorage.removeItem('PRIVACY_CONSENT');
  };
  const showUserId = () => {
    /**
     * This ID is a non binding identifier which can be used to make a data request to Contentsquare.
     * You are able to get an ID only if the user is not Opted-out.
     */
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
