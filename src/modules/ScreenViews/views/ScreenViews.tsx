import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../constants';

export const ScreenViews: React.FunctionComponent = () => {
  useEffect(() => {
    Contentsquare.send('Screenview');
  }, []);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
