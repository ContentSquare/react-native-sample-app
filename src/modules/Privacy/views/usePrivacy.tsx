import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect } from 'react';
import { usePrivacyManagerModal } from '../../../shared/views/PrivacyManager/usePrivacyManagerModal';

export const usePrivacy = () => {
  const { setIsPrivacyManagerVisible } = usePrivacyManagerModal();

  useEffect(() => {
    Contentsquare.send('Privacy');
  }, []);

  const showPrivacyManager = () => {
    setIsPrivacyManagerVisible(true);
  };

  return { showPrivacyManager };
};
