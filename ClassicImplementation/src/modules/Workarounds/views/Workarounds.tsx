import React from 'react';
import { NavigationList } from '../../../shared/views/NavigationList/NavigationList';
import { useWorkarounds } from './useWorkarounds';

export const Workarounds: React.FunctionComponent = () => {
  const { screensConfig } = useWorkarounds();

  return <NavigationList screensConfig={screensConfig} />;
};
