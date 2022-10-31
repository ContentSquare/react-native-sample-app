import { useNavigation as useNavigationBase } from '@react-navigation/native';
import { RootNavigatorNavigationProps } from './types';

export const useNavigation = (): RootNavigatorNavigationProps =>
  useNavigationBase<RootNavigatorNavigationProps>();
