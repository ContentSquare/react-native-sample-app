import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import Contentsquare from '@contentsquare/react-native-bridge';

const handleOpenURL = (event) => {
  Contentsquare.handleUrl(event.url);
}

export default function App() {

useEffect(() => {
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
      <Text>Open up App.tsx to start working on your app!</Text>
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
