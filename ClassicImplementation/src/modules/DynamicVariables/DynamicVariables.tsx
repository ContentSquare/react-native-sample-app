import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../constants';
import { useDynamicVariables } from './useDynamicVariables';

export const DynamicVariables: React.FunctionComponent = () => {
  const { onSendButtonPress } = useDynamicVariables();

  const onError = (error: Error) =>{
    console.log(error.toString())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This showcases how to use dynamic variables to gather additional data
        about the session, such as which version of an A/B test the user saw, or
        other relevant user data. Please refer to the logs to check the
        variables being sent.
      </Text>
      <Button
        title="Send a number"
        onPress={() => {
          onSendButtonPress('number', 20);
        }}
      />
      <Button
        title="Send a string"
        onPress={() => {
          onSendButtonPress('string', 'this is a string');
        }}
      />
      <Button
        title="Send float value causing error log"
        onPress={() => {
          onSendButtonPress('number', 3.14, onError);
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
