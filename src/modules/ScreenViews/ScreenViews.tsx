import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect } from 'react';
import { NavigationList } from '../../shared/views/NavigationList/NavigationList';
import { useScreenViews } from './useScreenViews';

export const ScreenViews: React.FunctionComponent = () => {
  const { screensConfig } = useScreenViews();

  useEffect(() => {
    Contentsquare.send('Screenview');
  }, []);

  return <NavigationList screensConfig={screensConfig} />;
};
