import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, gridUnit } from '../constants';

type Props = {
  label: string;
  price: number;
  currency: string;
  onPress?: () => void;
  isDisabled?: boolean;
};

export const PriceButton: React.FunctionComponent<Props> = ({
  label,
  price,
  currency,
  onPress,
  isDisabled = false,
}) => {
  const backgroundColor = isDisabled ? colors.lightGrey : colors.blue;

  return (
    <Pressable
      style={[styles.container, { backgroundColor }]}
      onPress={isDisabled ? undefined : onPress}
    >
      <Text style={styles.text}>{label}</Text>
      <Text
        style={[styles.text, styles.priceText]}
      >{`${price} ${currency}`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: gridUnit,
    justifyContent: 'space-between',
    padding: 2 * gridUnit,
  },
  text: {
    color: colors.white,
  },
  priceText: {
    fontWeight: 'bold',
  },
});
