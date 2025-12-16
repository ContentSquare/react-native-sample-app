import {CSQ} from '@contentsquare/react-native-bridge';

export const useDynamicVariables = () => {
  const onErrorCallback = (error: Error) => {
    console.log('Error when using addDynamicVar() -> ', error.toString());
  };

  const onSendButtonPress = (
    key: string,
    value: number | string,
    onError?: (error: Error) => void,
  ) => {
    // For each dynamic variable, we send:
    // key (string, mandatory)
    // value (string or integer, mandatory)
    // /!\ Note that if you send an integer as a value, it has indeed to be an integer.
    // A null or a float will not be accepted as a valid parameter, and will result in an error.
    // Also, in order for you to be able to handle such errors happening when we try to send the dynamic variable,
    // you can also add, as a last parameter, a function that we will call so you can handle it gracefully.
    // Note that if you do not add that callback, we will simply log the error's message on the console whenever it happens.
    CSQ.addDynamicVar(key, value, onError);
  };

  return {onSendButtonPress, onErrorCallback};
};
