import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors, gridUnit } from '../../constants';
import { currencyByCurrencyCode } from '../../shared/lib/currency';
import { PriceButton } from '../../shared/PriceButton';
import { Spacer } from '../../shared/Spacer';
import { CartLine } from './components/CartLine';
import {
  CURRENCIES,
  EUR_TO_USD_CONVERT_RATE,
  ITEM_1_NAME,
  ITEM_2_NAME,
  useTransactions,
} from './useTransactions';

export const Transactions: React.FunctionComponent = () => {
  const {
    total,
    onAddItemButtonPress,
    onValidateButtonPress,
    numberOfItems1,
    numberOfItems2,
    isDropdownOpen,
    setIsDropDownOpen,
    currency,
    setCurrency,
    item1Price,
    item2Price,
    onCurrencyChange,
  } = useTransactions();

  const isCartEmpty = numberOfItems1 === 0 && numberOfItems2 === 0;

  return (
    <View style={styles.container}>
      <Text>
        This showcases how to track purchases made by an user with
        CustomerTransactions. Add items to the cart then press the confirm
        button to send the transaction.
      </Text>
      <Spacer height={gridUnit * 2} />
      <DropDownPicker
        open={isDropdownOpen}
        value={currency}
        items={CURRENCIES}
        setOpen={setIsDropDownOpen}
        setValue={setCurrency}
        placeholder={currencyByCurrencyCode[currency]}
        onChangeValue={value => {
          onCurrencyChange(value);
        }}
      />
      <Spacer height={gridUnit} />
      <Text>{`1 EUR = ${EUR_TO_USD_CONVERT_RATE} USD`}</Text>
      <Spacer height={gridUnit * 2} />
      <PriceButton
        label={ITEM_1_NAME}
        price={item1Price}
        currency={currency}
        onPress={() => onAddItemButtonPress(item1Price)}
      />
      <Spacer height={gridUnit} />
      <PriceButton
        label={ITEM_2_NAME}
        price={item2Price}
        currency={currency}
        onPress={() => onAddItemButtonPress(item2Price)}
      />
      <Spacer height={gridUnit * 2} />
      <View style={styles.cart}>
        {isCartEmpty ? (
          <View style={styles.emptyCartView}>
            <Text>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <CartLine
              quantity={numberOfItems1}
              itemName={ITEM_1_NAME}
              unitPrice={item1Price}
              currency={currency}
            />
            <CartLine
              quantity={numberOfItems2}
              itemName={ITEM_2_NAME}
              unitPrice={item2Price}
              currency={currency}
            />
          </>
        )}
      </View>
      <Spacer height={gridUnit * 2} />
      <PriceButton
        label="Confirm order (identified)"
        price={total}
        currency={currency}
        onPress={() => onValidateButtonPress(true)}
        isDisabled={isCartEmpty}
      />
      <Spacer height={gridUnit} />
      <PriceButton
        label="Confirm order (unidentified)"
        price={total}
        currency={currency}
        onPress={() => onValidateButtonPress(false)}
        isDisabled={isCartEmpty}
      />
      <Spacer height={gridUnit * 2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: gridUnit * 2,
  },
  cart: {
    flex: 1,
    backgroundColor: colors.sand,
    borderRadius: gridUnit,
    padding: gridUnit * 2,
  },
  emptyCartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
