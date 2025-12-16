import React, {FunctionComponent} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, gridUnit} from '../../../constants';
import {usePrivacy} from './usePrivacy';

export const Privacy: FunctionComponent = () => {
  const {
    showPrivacyManager,
    stopTracking,
    resumeTracking,
    showUserId,
    metadata,
  } = usePrivacy();

  return (
    <View style={styles.container}>
      <Button title={'Show privacy preferences'} onPress={showPrivacyManager} />
      <Button title={'Stop tracking user'} onPress={stopTracking} />
      <Button title={'Resume tracking user'} onPress={resumeTracking} />
      <Button title={'Display user ID'} onPress={showUserId} />
      {metadata && (
        <ScrollView style={styles.metadataContainer}>
          <Text style={styles.metadataTitle}>Metadata:</Text>
          <Text style={styles.metadataText}>{metadata}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  metadataContainer: {
    marginTop: 2 * gridUnit,
    padding: 2 * gridUnit,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  metadataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: gridUnit,
  },
  metadataText: {
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
