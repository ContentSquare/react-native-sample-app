import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, gridUnit } from "../../../constants";
import Contentsquare from "@contentsquare/react-native-bridge";

export const BasicScreenView: React.FunctionComponent = () => {
  useEffect(() => {
    Contentsquare.send("Expo screen view");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This basic screen implements Contentsquare screen view. Look at the
        implementation in src/modules/ScreenViews/views/BasicScreenView.tsx.
      </Text>
    </View>
  );
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
