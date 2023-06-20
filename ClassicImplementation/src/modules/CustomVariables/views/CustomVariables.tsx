import Contentsquare, { CustomVar } from '@contentsquare/react-native-bridge';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

const numberOfCustomVariables = 3;

export const CustomVariables = () => {
  const [variablesToSend, setVariablesToSend] = useState<string[]>(
    Array.from(''.repeat(numberOfCustomVariables)),
  );

  return (
    <View style={styles.container}>
      {Array.apply(null, Array(numberOfCustomVariables)).map((_, index) => (
        <TextInput
          placeholder={`Custom variable #${index}`}
          autoComplete="off"
          style={styles.textInput}
          key={index}
          onChangeText={text => {
            setVariablesToSend(currentVariables => {
              const newVariables = [...currentVariables];
              newVariables.splice(index, 1, text);
              return newVariables;
            });
          }}
        />
      ))}
      <Button
        title={'Send'}
        onPress={() => {
          const customVariables: CustomVar[] = variablesToSend.map(
            (value, index) => ({
              index,
              key: `CustomVariable${index}`,
              value,
            }),
          );
          Contentsquare.send('CustomVariablesScreen', customVariables);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 2 * gridUnit,
  },
  textInput: {
    padding: 2 * gridUnit,
    marginVertical: gridUnit,
    borderWidth: 1,
    borderRadius: 16,
  },
});
