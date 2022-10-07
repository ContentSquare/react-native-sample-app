import React from 'react';
import { NavigationList } from '../../../shared/views/NavigationList/NavigationList';
import { useHome } from './useHome';

export const Home: React.FunctionComponent = () => {
  const { screensConfig } = useHome();

  return <NavigationList screensConfig={screensConfig} />;
};
