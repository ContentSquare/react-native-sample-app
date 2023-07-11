import { Screens } from '../../../app/navigation/Screens';
import { ScreenConfig } from '../../../shared/views/NavigationList/NavigationList';

export const useSessionReplayViews = () => {
  const screensConfig: ScreenConfig[] = [
    {
      title: 'Session Replay Masking',
      navigationScreen: Screens.SESSION_REPLAY_MASKING,
    },
    {
      title: 'Session Replay Link',
      navigationScreen: Screens.SESSION_REPLAY_LINKING,
    },
  ];

  return { screensConfig };
};
