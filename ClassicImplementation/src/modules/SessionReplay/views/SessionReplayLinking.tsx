import Contentsquare from '@contentsquare/react-native-bridge';
import Clipboard from '@react-native-clipboard/clipboard';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const SessionReplayLinking = () => {
  useEffect(() => {
    const sessionReplayLinkSubscriber = Contentsquare.onSessionReplayLinkChange(
      link => {
        Alert.alert(`New link copied to the clipboard ${link}`);

        Clipboard.setString(link);
      }
    );

    return () => {
      if (sessionReplayLinkSubscriber) {
        sessionReplayLinkSubscriber.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        To test onSessionReplayLinkChange send the app to background and wait
        for some time for session replay to be updated. Once you open the app
        again you should see the link in your clipboard automatically.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 2 * gridUnit,
  },
  title: {
    textAlign: 'center',
    paddingVertical: gridUnit,
  },
});
