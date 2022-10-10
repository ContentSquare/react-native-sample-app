import Contentsquare, { Currency } from '@contentsquare/react-native-bridge';
import { useState } from 'react';
import { currencyByCurrencyCode } from '../../shared/lib/currencyByCurrencyCode';

export const ITEM_1_NAME = 'Bottle of water';
export const ITEM_1_DEFAULT_PRICE = 2;

export const ITEM_2_NAME = 'Bottle of iced tea';
export const ITEM_2_DEFAULT_PRICE = 3;

export const CURRENCIES = [
  { label: currencyByCurrencyCode[Currency.EUR], value: Currency.EUR },
  { label: currencyByCurrencyCode[Currency.USD], value: Currency.USD },
];

export const EUR_TO_USD_CONVERT_RATE = 0.97;

export const useTransactions = () => {
  const [transactionNumber, setTransactionNumber] = useState(1);
  const [cart, setCart] = useState<number[]>([]);
  const [currency, setCurrency] = useState(CURRENCIES[0].value);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [item1Price, setItem1Price] = useState(ITEM_1_DEFAULT_PRICE);
  const [item2Price, setItem2Price] = useState(ITEM_2_DEFAULT_PRICE);

  const onCurrencyChange = (value: Currency | null) => {
    if (value === Currency.USD) {
      setItem1Price(convertEurToUsd(item1Price));
      setItem2Price(convertEurToUsd(item2Price));
      setCart(cart.map(itemPrice => convertEurToUsd(itemPrice)));
    } else {
      setItem1Price(ITEM_1_DEFAULT_PRICE);
      setItem2Price(ITEM_2_DEFAULT_PRICE);
      setCart(
        cart.map(itemPrice =>
          convertEurToUsd(ITEM_1_DEFAULT_PRICE) === itemPrice
            ? ITEM_1_DEFAULT_PRICE
            : ITEM_2_DEFAULT_PRICE,
        ),
      );
    }
  };

  const convertEurToUsd = (amount: number) => {
    return amount * EUR_TO_USD_CONVERT_RATE;
  };

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
      currency,
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
    numberOfItems1: cart.filter(itemPrice => itemPrice === item1Price).length,
    numberOfItems2: cart.filter(itemPrice => itemPrice === item2Price).length,
    total: Math.round(getTotal() * 100) / 100,
    currency,
    setCurrency,
    isDropdownOpen,
    setIsDropDownOpen,
    item1Price,
    item2Price,
    onCurrencyChange,
  };
};
