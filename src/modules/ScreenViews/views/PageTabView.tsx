import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { colors, gridUnit } from '../../../constants';

export const PageTabView: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    Contentsquare.send(`Tab view ${index + 1}`);
  }, [index]);

  const routes = [
    { key: 'first', title: 'Tab 1' },
    { key: 'second', title: 'Tab 2' },
  ];

  const FirstRoute: React.FunctionComponent<{ tabNumber: number }> = ({
    tabNumber,
  }) => (
    <View style={styles.container}>
      <Text style={[styles.text, styles.pageNumberText]}>Tab {tabNumber}</Text>
      <Text style={styles.text}>
        This section showcases triggering screen views for each tab of a tab
        view.
      </Text>
      <Text style={styles.text}>Try switching tabs.</Text>
    </View>
  );

  const renderScene = SceneMap({
    first: () => <FirstRoute tabNumber={1} />,
    second: () => <FirstRoute tabNumber={2} />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  text: {
    padding: gridUnit * 2,
    textAlign: 'center',
  },
  pageNumberText: {
    paddingBottom: gridUnit * 2,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
