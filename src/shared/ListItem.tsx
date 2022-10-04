import React, { FunctionComponent } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, gridUnit } from '../constants';

type Props = {
  label: string;
  onPress?: () => void;
};

export const ListItem: FunctionComponent<Props> = ({ label, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: gridUnit * 2,
    paddingHorizontal: gridUnit,
  },
  label: {
    color: colors.black,
  },
});
