import Contentsquare from '@contentsquare/react-native-bridge';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { Screens } from '../../app/navigation/Screens';
import { ScreenConfig } from '../../shared/views/NavigationList/NavigationList';

export const useScreenViews = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Contentsquare.send('Screenview');
    }
  }, [isFocused]);

  const screensConfig: ScreenConfig[] = [
    {
      title: 'Default implementation',
      navigationScreen: Screens.BASIC_SCREEN_VIEW,
    },
    {
      title: 'Paged scroll views',
      navigationScreen: Screens.PAGED_SCROLL_VIEW,
    },
    { title: 'Modal dismissals', navigationScreen: Screens.MODAL_SCREEN_VIEW },
  ];

  return { screensConfig };
};
