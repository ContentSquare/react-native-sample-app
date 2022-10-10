import Contentsquare, { Currency } from '@contentsquare/react-native-bridge';
import { useState } from 'react';

export const ITEM_1_NAME = 'Bottle of water';
export const ITEM_1_PRICE = 2;

export const ITEM_2_NAME = 'Bottle of iced tea';
export const ITEM_2_PRICE = 3;

export const ITEMS_CURRENCY = Currency.EUR;

export const useTransactions = () => {
  const [transactionNumber, setTransactionNumber] = useState(1);
  const [cart, setCart] = useState<number[]>([]);

  const getTotal = () => {
    return cart.reduce((partialSum, a) => partialSum + a, 0);
  };

  const onValidateButtonPress = (isIdentified: boolean) => {
    // Sends transaction event with an optional transactionID when pressing the validate button
    // The currency is conforming to the ISO 4217 standard.
    // Although the currency can be passed either as "alphanumeric code" or "numeric code",
    // you should always prefer using the bridge's Currency object values.
    Contentsquare.sendTransaction(
      getTotal(),
      ITEMS_CURRENCY,
      isIdentified ? `transaction#${transactionNumber}` : undefined,
    );
    if (isIdentified) {
      setTransactionNumber(transactionNumber + 1);
    }
    setCart([]);
  };

  const onAddItemButtonPress = (newItemPrice: number) => {
    setCart([...cart, newItemPrice]);
  };

  return {
    transactionNumber,
    onAddItemButtonPress,
    onValidateButtonPress,
    numberOfItems1: cart.filter(itemPrice => itemPrice === ITEM_1_PRICE).length,
    numberOfItems2: cart.filter(itemPrice => itemPrice === ITEM_2_PRICE).length,
    total: getTotal(),
  };
};
