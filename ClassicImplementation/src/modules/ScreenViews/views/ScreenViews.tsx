import React from 'react';
import { NavigationList } from '../../../shared/views/NavigationList/NavigationList';
import { useScreenViews } from './useScreenViews';

export const ScreenViews: React.FunctionComponent = () => {
  const { screensConfig } = useScreenViews();

  return <NavigationList screensConfig={screensConfig} />;
};
