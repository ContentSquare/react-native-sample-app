import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { usePrivacy } from './usePrivacy';

export const Privacy: FunctionComponent = () => {
  const { showPrivacyManager } = usePrivacy();

  return (
    <View style={styles.container}>
      <Button title={'Show privacy preferences'} onPress={showPrivacyManager} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
