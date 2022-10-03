import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const BasicScreenView: React.FunctionComponent = () => {
  useEffect(() => {
    Contentsquare.send('Default screen view demo page');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This controller implements screen views by calling them in a useEffect.
        Look at the implementation in BasicScreenView.tsx.
      </Text>
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
});
