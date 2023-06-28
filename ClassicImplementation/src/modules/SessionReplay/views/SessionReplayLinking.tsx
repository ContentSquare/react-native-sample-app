
import Contentsquare from '@contentsquare/react-native-bridge';
import Clipboard from '@react-native-community/clipboard';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

export const SessionReplayLinking = () => {
  const [SRLinkDescription, setSRLinkDescription] = useState('Click on the button to retrieve the current Session Replay link');

  const getCurrentSessionReplayLink = async () => {

    const link = await Contentsquare.getCurrentSessionReplayLink()
    console.log(link)

    if (link) {
      setSRLinkDescription(`The current SessionReplay link is:\n${link}`)
      Clipboard.setString(link)
    } else {
      setSRLinkDescription('No link found')
    }
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>{SRLinkDescription}</Text>
    <Button
      title={"Get Current Session Replay Link"}
      onPress={getCurrentSessionReplayLink}
    />
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
