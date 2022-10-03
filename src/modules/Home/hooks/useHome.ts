import { Screens } from '../../../app/navigation/Screens';
import { ScreenConfig } from '../../../shared/views/NavigationList/NavigationList';

export const useHome = () => {
  const screensConfig: ScreenConfig[] = [
    { title: 'Screen views', navigationScreen: Screens.SCREEN_VIEWS },
    { title: 'Privacy' },
    { title: 'Dynamic variables' },
    { title: 'Transactions' },
    { title: 'Masking' },
  ];

  return { screensConfig };
};
