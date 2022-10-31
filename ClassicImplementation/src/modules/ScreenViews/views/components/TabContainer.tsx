import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../../constants';

type Props = {
  title: string;
};

export const TabContainer: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.pageNumberText]}>{title}</Text>
      <Text style={styles.text}>
        This section showcases triggering screen views for each tab of a tab
        view.
      </Text>
      <Text style={styles.text}>Try switching tabs.</Text>
    </View>
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
