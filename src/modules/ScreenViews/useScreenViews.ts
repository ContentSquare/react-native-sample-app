import { Screens } from '../../app/navigation/Screens';
import { ScreenConfig } from '../../shared/views/components/NavigationList/NavigationList';

export const useScreenViews = () => {
  const screensConfig: ScreenConfig[] = [
    {
      title: 'Default implementation',
      navigationScreen: Screens.BASIC_SCREEN_VIEW,
    },
    { title: 'Storyboard controllers' },
    {
      title: 'Paged scroll views',
      navigationScreen: Screens.PAGED_SCROLL_VIEW,
    },
    { title: 'Modal dismissals' },
  ];

  return { screensConfig };
};
