import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

export const Separator: FunctionComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    backgroundColor: '#CECED0',
  },
});
