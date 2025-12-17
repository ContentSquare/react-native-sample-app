import {CSQ, CustomVar} from '@contentsquare/react-native-bridge';
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {colors, gridUnit} from '../../../constants';

const numberOfCustomVariables = 3;

export const CustomVariables = () => {
  const [variablesToSend, setVariablesToSend] = useState<string[]>(
    Array(numberOfCustomVariables).fill(''),
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
          // Find the last non-empty variable index
          const lastNonEmptyIndex = variablesToSend.reduce(
            (lastIndex, value, index) =>
              value.trim() !== '' ? index : lastIndex,
            -1,
          );

          // Only include variables up to the last non-empty one
          const customVariables: CustomVar[] = variablesToSend
            .slice(0, lastNonEmptyIndex + 1)
            .map((value, index) => ({
              index,
              key: `CustomVariable${index}`,
              value: value.trim() === '' ? 'cs-empty' : value,
            }));

          CSQ.trackScreenview('CustomVariablesScreen', customVariables);
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
