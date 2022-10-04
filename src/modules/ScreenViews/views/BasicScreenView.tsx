import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const BasicScreenView: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This controller implements screen views by calling them in the
        navigation callback onStateChange. Look at the implementation in
        src/app/navigation/index.tsx.
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
