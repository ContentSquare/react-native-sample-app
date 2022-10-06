import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../constants';
import { PriceButton } from '../../shared/PriceButton';
import { Spacer } from '../../shared/Spacer';
import { CartLine } from './components/CartLine';
import {
  ITEMS_CURRENCY,
  ITEM_1_NAME,
  ITEM_1_PRICE,
  ITEM_2_NAME,
  ITEM_2_PRICE,
  useTransactions,
} from './useTransactions';

export const Transactions: React.FunctionComponent = () => {
  const {
    total,
    onAddItemButtonPress,
    onValidateButtonPress,
    numberOfItems1,
    numberOfItems2,
  } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This showcases how to track purchases made by an user with
        CustomerTransactions. Add items to the cart then press the confirm
        button to send the transaction.
      </Text>
      <Spacer height={gridUnit} />
      <PriceButton
        label={ITEM_1_NAME}
        price={ITEM_1_PRICE}
        currency={ITEMS_CURRENCY}
        onPress={() => onAddItemButtonPress(ITEM_1_PRICE)}
      />
      <Spacer height={gridUnit} />
      <PriceButton
        label={ITEM_2_NAME}
        price={ITEM_2_PRICE}
        currency={ITEMS_CURRENCY}
        onPress={() => onAddItemButtonPress(ITEM_2_PRICE)}
      />
      <Spacer height={gridUnit * 2} />
      <View style={styles.cart}>
        {numberOfItems1 === 0 && numberOfItems2 === 0 ? (
          <View style={styles.emptyCartView}>
            <Text>Your cart is empty</Text>
          </View>
        ) : (
          <>
            <CartLine
              quantity={numberOfItems1}
              itemName={ITEM_1_NAME}
              unitPrice={ITEM_1_PRICE}
              currency={ITEMS_CURRENCY}
            />
            <CartLine
              quantity={numberOfItems2}
              itemName={ITEM_2_NAME}
              unitPrice={ITEM_2_PRICE}
              currency={ITEMS_CURRENCY}
            />
          </>
        )}
      </View>
      <Spacer height={gridUnit * 2} />
      <PriceButton
        label="Confirm order (identified)"
        price={total}
        currency={ITEMS_CURRENCY}
        onPress={() => onValidateButtonPress(true)}
      />
      <Spacer height={gridUnit} />
      <PriceButton
        label="Confirm order (unidentified)"
        price={total}
        currency={ITEMS_CURRENCY}
        onPress={() => onValidateButtonPress(false)}
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
  text: {
    paddingVertical: gridUnit,
    textAlign: 'center',
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
