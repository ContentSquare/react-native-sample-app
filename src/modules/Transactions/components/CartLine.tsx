import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gridUnit } from '../../../constants';

type Props = {
  quantity: number;
  itemName: string;
  unitPrice: number;
  currency: string;
};

export const CartLine: FunctionComponent<Props> = ({
  quantity,
  itemName,
  unitPrice,
  currency,
}) => {
  if (quantity === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{`${quantity} x ${itemName}`}</Text>
      <Text>{`${unitPrice * quantity} ${currency}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: gridUnit,
  },
});
