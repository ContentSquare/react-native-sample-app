import { usePrivacyManagerModal } from '../../../shared/views/PrivacyManager/usePrivacyManagerModal';

export const usePrivacy = () => {
  const { setIsPrivacyManagerVisible } = usePrivacyManagerModal();

  const showPrivacyManager = () => {
    setIsPrivacyManagerVisible(true);
  };

  return { showPrivacyManager };
};
