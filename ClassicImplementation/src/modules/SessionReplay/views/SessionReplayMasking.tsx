import {CSQMask} from '@contentsquare/react-native-bridge';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {colors, gridUnit} from '../../../constants';

export const SessionReplayMasking = () => {
  const [shouldMaskContent, setShouldMaskContent] = useState(false);

  return (
    <View style={styles.container}>
      <CSQMask isSessionReplayMasked={shouldMaskContent}>
        <Text style={styles.title}>Buy my amazing merch!</Text>
        <Text>
          Hurry up! This offer won't be available tomorrow. Only $99.98 to get
          hands on a wonderful brandnew life changing item
        </Text>
      </CSQMask>
      <Button
        title={shouldMaskContent ? 'Unmask content' : 'Mask content'}
        onPress={() => {
          setShouldMaskContent(currentValue => !currentValue);
        }}
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
    fontWeight: '700',
    paddingVertical: gridUnit,
  },
});
