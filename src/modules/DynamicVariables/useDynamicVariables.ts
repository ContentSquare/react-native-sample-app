import Contentsquare from '@contentsquare/react-native-bridge';

export const useDynamicVariables = () => {
  const onSendButtonPress = (key: string, value: number | string) => {
    // Sends variable with an associated key
    Contentsquare.sendDynamicVar(key, value);
  };

  return { onSendButtonPress };
};
