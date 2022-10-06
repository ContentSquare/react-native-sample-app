import Contentsquare, { Currency } from '@contentsquare/react-native-bridge';
import { useState } from 'react';

export const ITEM_NAME = 'Bottle of water';
export const ITEM_PRICE = 2;
export const ITEM_PRICE_CURRENCY = Currency.EUR;

export const useTransactions = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState(1);

  const onValidateButtonPress = () => {
    // Sends transaction event when pressing the validate button
    Contentsquare.sendTransaction(
      numberOfItems * ITEM_PRICE,
      ITEM_PRICE_CURRENCY,
      `transaction#${transactionNumber}`,
    );
    setNumberOfItems(0);
    setTransactionNumber(transactionNumber + 1);
  };

  const onAddItemButtonPress = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  return {
    numberOfItems,
    transactionNumber,
    onAddItemButtonPress,
    onValidateButtonPress,
  };
};
