import React, { useEffect } from 'react';
import { useAppInit } from './src/useAppInit';
import Contentsquare from '@contentsquare/react-native-bridge';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from './src/constants';

const App = () => {
  const { isLoadingComplete } = useAppInit();

  useEffect(() => {
    Contentsquare.optIn();
    Contentsquare.send("Classic implementation screen view");
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This app showcases how to add the Contentsquare bridge in a bare React Native
          app. Check out the code and documentation to learn more!
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  text: {
    padding: gridUnit * 2,
    textAlign: "center",
  },
});

export default App;
