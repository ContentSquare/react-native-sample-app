import { Currency } from '@contentsquare/react-native-bridge';

export const currencyByCurrencyCode: Record<Currency, string> = {
  [Currency.EUR]: '€',
  [Currency.USD]: '$',
};
