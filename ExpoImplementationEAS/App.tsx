import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, gridUnit } from "./src/constants";
import Contentsquare from "@contentsquare/react-native-bridge";
import { useAppInit } from "./src/useAppInit";

const App = () => {
  const { isLoadingComplete } = useAppInit();

  useEffect(() => {
    Contentsquare.optIn();
    Contentsquare.send("Expo screen view");
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This app showcases how to add the Contentsquare bridge in an Expo EAS
          app. Please check the ClassicImplementation project for insight about
          how to properly use the Contentsquare bridge in your app.{" "}
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
