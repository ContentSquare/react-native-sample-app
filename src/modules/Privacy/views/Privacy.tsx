import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { usePrivacy } from './usePrivacy';

export const Privacy: FunctionComponent = () => {
  const {
    showPrivacyManager,
    stopTracking,
    resumeTracking,
    forgetUser,
    showUserId,
  } = usePrivacy();

  return (
    <View style={styles.container}>
      <Button title={'Show privacy preferences'} onPress={showPrivacyManager} />
      <Button title={'Stop tracking user'} onPress={stopTracking} />
      <Button title={'Resume tracking user'} onPress={resumeTracking} />
      <Button title={'Forget user'} onPress={forgetUser} />
      <Button title={'Display user ID'} onPress={showUserId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
