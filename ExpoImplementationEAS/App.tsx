import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import Contentsquare, { Currency } from '@contentsquare/react-native-bridge';

const handleOpenURL = (event) => {
  Contentsquare.handleUrl(event.url);
}

export default function App() {

useEffect(() => {
  Contentsquare.send('Home screen view')
  try {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          handleOpenURL({ url });
        }
      })
      .catch(err => {
        console.warn('An error occurred', err);
      });
    Linking.addEventListener('url', handleOpenURL);
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
  } 
}, [])

  return (
    <View style={styles.container}>
      <Text>This app runs using Expo.</Text>
      <Text>Try to send a transaction by pressing the button below.</Text>
     <Button title='Make a transaction' onPress={() => {Contentsquare.sendTransaction(10, Currency.USD)}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
