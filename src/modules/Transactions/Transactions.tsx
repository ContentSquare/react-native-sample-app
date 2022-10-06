import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../constants';
import {
  ITEM_NAME,
  ITEM_PRICE,
  ITEM_PRICE_CURRENCY,
  useTransactions,
} from './useTransactions';

export const Transactions: React.FunctionComponent = () => {
  const {
    numberOfItems,
    transactionNumber,
    onAddItemButtonPress,
    onValidateButtonPress,
  } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This showcases how to track purchases made by an user with
        CustomerTransactions. Add items to the cart then press the validate
        button to send the transaction.
      </Text>
      <Text
        style={
          styles.text
        }>{`Item: ${ITEM_NAME} | Unit price: ${ITEM_PRICE} EUR (${ITEM_PRICE_CURRENCY})`}</Text>
      <Text style={styles.text}>{`${numberOfItems} x ${ITEM_NAME}: TOTAL = ${
        numberOfItems * ITEM_PRICE
      } EUR (${ITEM_PRICE_CURRENCY})`}</Text>
      <Text
        style={styles.text}>{`Transaction number ${transactionNumber}`}</Text>
      <View style={styles.buttonsView}>
        <Button title="Add item" onPress={onAddItemButtonPress} />
        <Button title="Validate cart" onPress={onValidateButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: gridUnit * 2,
  },
  text: {
    paddingVertical: gridUnit,
    textAlign: 'center',
  },
  buttonsView: {
    paddingTop: gridUnit * 3,
  },
});
