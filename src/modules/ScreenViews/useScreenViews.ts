import { Screens } from '../../app/navigation/Screens';
import { ScreenConfig } from '../../shared/views/NavigationList/NavigationList';

export const useScreenViews = () => {
  const screensConfig: ScreenConfig[] = [
    {
      title: 'Default implementation',
      navigationScreen: Screens.BASIC_SCREEN_VIEW,
    },
    {
      title: 'Paged scroll views',
      navigationScreen: Screens.PAGED_SCROLL_VIEW,
    },
    {
      title: 'Modal dismissals',
      navigationScreen: Screens.MODAL_SCREEN_VIEW,
    },
    {
      title: 'Tab view',
      navigationScreen: Screens.PAGE_TAB_VIEW,
    },
  ];

  return { screensConfig };
};
