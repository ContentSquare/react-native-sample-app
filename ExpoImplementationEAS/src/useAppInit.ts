import Contentsquare from '@contentsquare/react-native-bridge';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

export const useAppInit = () => {
  const handleOpenURL = (event: { url: string }) => {
    Contentsquare.handleUrl(event.url);
  };

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Contentsquare in-app link listener, see documentation https://docs.contentsquare.com/en/react-native/in-app-features/#call-the-react-native-api
  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
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
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    };
    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete };
};
