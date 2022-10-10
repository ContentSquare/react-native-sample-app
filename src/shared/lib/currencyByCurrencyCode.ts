import { Currency } from '@contentsquare/react-native-bridge';

export const currencyByCurrencyCode: Record<
  Currency[keyof Currency & number],
  string
> = {
  [Currency.EUR]: '€',
  [Currency.USD]: '$',
};
