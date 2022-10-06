import { Currency } from '@contentsquare/react-native-bridge';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, gridUnit } from '../constants';
import { currencyByCurrencyCode } from './lib/currencyByCurrencyCode';

type Props = {
  label: string;
  price: number;
  currency: Currency;
  onPress?: () => void;
};

export const PriceButton: React.FunctionComponent<Props> = ({
  label,
  price,
  currency,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <Text
        style={[
          styles.text,
          styles.priceText,
        ]}>{`${price} ${currencyByCurrencyCode[currency]}`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: gridUnit,
    backgroundColor: colors.blue,
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
