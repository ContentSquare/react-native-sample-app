import { Currency } from '@contentsquare/react-native-bridge';

export const currencyByCurrencyCode: Record<Currency, string> = {
  [Currency.EUR]: '€',
  [Currency.USD]: '$',
};

const currencyByCurrencyString: Record<string, string> = {
  EUR: '€',
  USD: '$',
};

export const getCurrencyByCurrencyString = (currency: string) => {
  return currencyByCurrencyString[currency.toUpperCase()];
};
