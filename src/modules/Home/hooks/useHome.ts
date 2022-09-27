import { Screens } from '../../../app/navigation/Screens';
import { useNavigation } from '../../../app/navigation/useNavigation';

export const useHome = () => {
  const { navigate } = useNavigation();

  const screensConfig = [
    { title: 'Screen views', navigationScreen: Screens.SCREEN_VIEWS },
    { title: 'Privacy' },
    { title: 'Dynamic variables' },
    { title: 'Transactions' },
    { title: 'Masking' },
  ];

  const onListItemPress = (navigationScreen?: Screens) => {
    navigationScreen && navigate(navigationScreen);
  };

  return { screensConfig, onListItemPress };
};
