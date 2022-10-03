import { ScreenConfig } from '../../shared/views/components/NavigationList/NavigationList';

export const useScreenViews = () => {
  const screensConfig: ScreenConfig[] = [
    { title: 'Default implementation' },
    { title: 'Storyboard controllers' },
    { title: 'Paged scroll views' },
    { title: 'Modal dismissals' },
  ];

  return { screensConfig };
};
