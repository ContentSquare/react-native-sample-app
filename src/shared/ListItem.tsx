import React, { FunctionComponent } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
};

export const ListItem: FunctionComponent<Props> = ({ label, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
