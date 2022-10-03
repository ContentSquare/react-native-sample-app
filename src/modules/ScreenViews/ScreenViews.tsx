import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect } from 'react';
import {
  NavigationList,
  ScreenConfig,
} from '../../shared/views/components/NavigationList/NavigationList';

const screensConfig: ScreenConfig[] = [
  { title: 'Default implementation' },
  { title: 'Storyboard controllers' },
  { title: 'Paged scroll views' },
  { title: 'Modal dismissals' },
];

export const ScreenViews: React.FunctionComponent = () => {
  useEffect(() => {
    Contentsquare.send('Screenview');
  }, []);

  return <NavigationList screensConfig={screensConfig} />;
};
