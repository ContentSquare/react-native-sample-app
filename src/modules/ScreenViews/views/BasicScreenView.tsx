import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const BasicScreenView: React.FunctionComponent = () => {
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
