import {Screens} from '../../../app/navigation/Screens';
import {ScreenConfig} from '../../../shared/views/NavigationList/NavigationList';

export const useWorkarounds = () => {
  const screensConfig: ScreenConfig[] = [
    {
      title: 'Pan responder',
      navigationScreen: Screens.PAN_RESPONDER,
    },
  ];

  return {screensConfig};
};
