import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export const useAppInit = () => {
  const handleOpenURL = (event: { url: string }) => {
    Contentsquare.handleUrl(event.url);
  };

  useEffect(() => {
    Linking.getInitialURL()
      .then(ev => {
        if (ev) {
          handleOpenURL({ url: ev });
        }
      })
      .catch(err => {
        console.warn('An error occurred', err);
      });
    Linking.addEventListener('url', handleOpenURL);
  }, []);
};
