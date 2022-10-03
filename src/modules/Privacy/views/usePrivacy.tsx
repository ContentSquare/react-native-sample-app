import { usePrivacyManager } from '../../../shared/views/PrivacyManager/usePrivacyManager';

export const usePrivacy = () => {
  const { setIsPrivacyManagerVisible } = usePrivacyManager();

  const showPrivacyManager = () => {
    setIsPrivacyManagerVisible(true);
  };

  return { showPrivacyManager };
};
