import Contentsquare from '@contentsquare/react-native-bridge';
import React from 'react';
import { NavigationList } from '../../../shared/views/NavigationList/NavigationList';
import { useHome } from './useHome';

export const Home: React.FunctionComponent = () => {
  const { screensConfig } = useHome();

  // TODO: remove after merging RN6
  Contentsquare.optIn();

  return <NavigationList screensConfig={screensConfig} />;
};
