import { MobileCore } from '@adobe/react-native-aepcore';
import Contentsquare from '@contentsquare/react-native-bridge';
import AsyncStorage from '@react-native-community/async-storage';

export async function updateCsMatchingKey() {
  const csMatchingKeyRecord = await AsyncStorage.getItem(
    'csMatchingKey_creation_ts',
  );
  if (!csMatchingKeyRecord) {
    await submitNewCsMatchingKey();
    return;
  }

  const { timestamp } = JSON.parse(csMatchingKeyRecord);
  if (Date.now() - timestamp > 30 * 60 * 1000) {
    // if the key is not valid anymore, submit a new one
    await submitNewCsMatchingKey();
  }
  // if the key is still valid, do nothing
}

async function submitNewCsMatchingKey() {
  // Generate the matching key and store it in the local storage
  const csMatchingKeyValue = `${Math.random()}_${Date.now()}`;
  const newCsMatchingKeyRecord = {
    csMatchingKey: csMatchingKeyValue,
    timestamp: Date.now(),
  };

  console.debug({
    csMatchingKey: csMatchingKeyValue,
  });

  await AsyncStorage.setItem(
    'csMatchingKey_creation_ts',
    JSON.stringify(newCsMatchingKeyRecord),
  );

  // Submit the matching key to Contentsquare and Adobe
  Contentsquare.sendDynamicVar('csMatchingKey', csMatchingKeyValue);
  MobileCore.trackState('csMatchingKey_state', {
    csMatchingKey: csMatchingKeyValue,
  });
}
