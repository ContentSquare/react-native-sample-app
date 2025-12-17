import {CSQ} from '@contentsquare/react-native-bridge';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, gridUnit} from '../../../constants';

export const SessionReplayLinking = () => {
  const [metadata, setMetadata] = useState<string | null>(null);

  useEffect(() => {
    CSQ.onMetadataChange(payload => {
      console.log('Received metadata update:', payload);
      setMetadata(JSON.stringify(payload, null, 2));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        To test onMetadataChange send the app to background and wait for some
        time for session replay to be updated. Once you open the app again you
        should see the metadata below.
      </Text>
      {metadata && (
        <ScrollView style={styles.linkContainer}>
          <Text style={styles.linkTitle}>Metadata:</Text>
          <Text style={styles.linkText} selectable>
            {metadata}
          </Text>
        </ScrollView>
      )}
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
  linkContainer: {
    marginTop: 2 * gridUnit,
    padding: 2 * gridUnit,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: gridUnit,
  },
  linkText: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#0066cc',
  },
});
