import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../constants';

export const SessionReplayMasking = () => (
  <View style={styles.container}></View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
});
