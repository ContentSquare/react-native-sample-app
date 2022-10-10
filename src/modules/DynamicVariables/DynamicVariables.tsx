import Contentsquare from '@contentsquare/react-native-bridge';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../constants';

export const DynamicVariables: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This showcases how to use dynamic variables to gather additional data
        about the session, suc as which version of an A/B test the user saw, or
        other relevant user data. Please refer to the logs to check the
        variables being sent.
      </Text>
      <Button
        title="Send a number"
        onPress={() => {
          Contentsquare.sendDynamicVar('number', 20);
        }}
      />
      <Button
        title="Send a string"
        onPress={() => {
          Contentsquare.sendDynamicVar('string', 'this is a string');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: gridUnit * 2,
  },
  text: {
    textAlign: 'center',
    paddingBottom: gridUnit * 2,
  },
});
