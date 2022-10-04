import Contentsquare, { Currency } from '@contentsquare/react-native-bridge';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../constants';

const ITEM_NAME = 'Bottle of water';
const ITEM_PRICE = 2;
const ITEM_PRICE_CURRENCY = Currency.EUR;

export const Transactions: React.FunctionComponent = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState(1);

  const onValidateButtonPress = () => {
    Contentsquare.sendTransaction(
      numberOfItems * ITEM_PRICE,
      Currency.USD,
      `transaction#${transactionNumber}`,
    );
    setNumberOfItems(0);
    setTransactionNumber(transactionNumber + 1);
  };

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
        <Button
          title="Add item"
          onPress={() => setNumberOfItems(numberOfItems + 1)}
        />
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
