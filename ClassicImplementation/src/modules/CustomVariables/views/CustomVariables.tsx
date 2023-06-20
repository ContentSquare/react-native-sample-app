import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const CustomVariables = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 2 * gridUnit,
  },
});
