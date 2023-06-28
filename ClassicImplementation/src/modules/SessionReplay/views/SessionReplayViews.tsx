import React from 'react';
import { NavigationList } from '../../../shared/views/NavigationList/NavigationList';
import { useSessionReplayViews } from './useSessionReplayViews';

export const SessionReplayViews: React.FunctionComponent = () => {
  const { screensConfig } = useSessionReplayViews();

  return <NavigationList screensConfig={screensConfig} />;
};
