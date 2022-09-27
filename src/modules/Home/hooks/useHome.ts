import { Screens } from '../../../app/navigation/Screens';
import { useNavigation } from '../../../app/navigation/useNavigation';

type ScreenConfig = {
  title: string;
  navigationScreen?: Screens;
};

export const useHome = () => {
  const { navigate } = useNavigation();

  const screensConfig: ScreenConfig[] = [
    { title: 'Screen views', navigationScreen: Screens.SCREEN_VIEWS },
    { title: 'Privacy' },
    { title: 'Dynamic variables' },
    { title: 'Transactions' },
    { title: 'Masking' },
  ];

  const onListItemPress = (screenConfig: ScreenConfig) => {
    screenConfig.navigationScreen && navigate(screenConfig.navigationScreen);
  };

  return { screensConfig, onListItemPress };
};
