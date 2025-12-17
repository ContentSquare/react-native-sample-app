import {CSQ} from '@contentsquare/react-native-bridge';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {usePrivacyManagerModal} from '../../../shared/views/PrivacyManager/usePrivacyManagerModal';

export const usePrivacy = () => {
  const {setIsPrivacyManagerVisible} = usePrivacyManagerModal();
  const [metadata, setMetadata] = useState<string | null>(null);

  useEffect(() => {
    CSQ.trackScreenview('Privacy');
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
    CSQ.stop();
  };
  const resumeTracking = () => {
    CSQ.resumeTracking();
  };

  /**
   * This ID is a non binding identifier which can be used to make a data request to Contentsquare.
   * You are able to get an ID only if the user is not Opted-out.
   */
  const showUserId = () => {
    CSQ.onMetadataChange(payload => {
      setMetadata(JSON.stringify(payload, null, 2));
    });
  };

  return {
    showPrivacyManager,
    stopTracking,
    resumeTracking,
    showUserId,
    metadata,
  };
};
