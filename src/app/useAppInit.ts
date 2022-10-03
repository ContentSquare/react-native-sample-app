import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export const useAppInit = () => {
  const handleOpenURL = (event: { url: string }) => {
    Contentsquare.handleUrl(event.url);
  };

  // ContentSquare in-app link listener, see documentation https://docs.contentsquare.com/react-native/#1-call-the-react-native-api
  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          handleOpenURL({ url });
        }
      })
      .catch(err => {
        console.warn('An error occurred', err);
      });
    Linking.addEventListener('url', handleOpenURL);
  }, []);
};
