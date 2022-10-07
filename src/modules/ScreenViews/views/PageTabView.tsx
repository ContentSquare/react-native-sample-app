import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { TabContainer } from './components/TabContainer';

export const PageTabView: React.FunctionComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const routes = [
    { key: 'first', title: 'Shoes' },
    { key: 'second', title: 'Pants' },
  ];

  const renderScene = SceneMap({
    first: () => <TabContainer title={routes[0].title} />,
    second: () => <TabContainer title={routes[1].title} />,
  });

  // Sends screen view event when switching between tabs
  const onIndexChange = (index: number) => {
    setTabIndex(index);
    Contentsquare.send(`Tab view ${index + 1}`);
  };

  return (
    <TabView
      navigationState={{ index: tabIndex, routes }}
      renderScene={renderScene}
      onIndexChange={onIndexChange}
    />
  );
};
