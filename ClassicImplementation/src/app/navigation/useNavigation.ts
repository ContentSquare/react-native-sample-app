import { useNavigation as useNavigationBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

export const useNavigation = () => {
  return useNavigationBase<NativeStackNavigationProp<RootStackParamList>>();
};
