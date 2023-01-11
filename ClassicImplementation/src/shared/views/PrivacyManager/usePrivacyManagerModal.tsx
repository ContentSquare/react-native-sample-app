import React, { createContext, useContext, useState } from 'react';

export const PrivacyManagerContext = createContext<{
  isPrivacyManagerVisible: boolean;
  setIsPrivacyManagerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isPrivacyManagerVisible: false,
  setIsPrivacyManagerVisible: () => null,
});

export const PrivacyManagerProvider = ({ ...props }) => {
  const [isPrivacyManagerVisible, setIsPrivacyManagerVisible] =
    useState<boolean>(false);

  return (
    <PrivacyManagerContext.Provider
      value={{
        isPrivacyManagerVisible,
        setIsPrivacyManagerVisible: _ => {
          setIsPrivacyManagerVisible(_);
        },
      }}
      {...props}
    />
  );
};

export const usePrivacyManagerModal = () => useContext(PrivacyManagerContext);
