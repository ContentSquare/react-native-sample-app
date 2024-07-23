import { Edge, ExperienceEvent } from '@adobe/react-native-aepedge';
import Contentsquare from '@contentsquare/react-native-bridge';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function sendCSMatchingKeyIfNeeded() {
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
  await AsyncStorage.setItem(
    'csMatchingKey_creation_ts',
    JSON.stringify(newCsMatchingKeyRecord),
  );

  // Submit the matching key to Contentsquare and Adobe
  Contentsquare.sendDynamicVar('csMatchingKey', csMatchingKeyValue);

  const xdmData = { eventType: 'csMatchingKey_state' };
  const data = { csMatchingKey: csMatchingKeyValue };
  const experienceEvent = new ExperienceEvent(xdmData, data);
  Edge.sendEvent(experienceEvent);
}
