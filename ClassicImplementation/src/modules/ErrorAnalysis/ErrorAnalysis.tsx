import React, { FunctionComponent, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants';
import {URL, useErrorAnalysis} from './useErrorAnalysis';

export const ErrorAnalysis: FunctionComponent = () => {
  const { setURLMaskingPatterns, makeRequest} = useErrorAnalysis();

  useEffect(() => {
    setURLMaskingPatterns([`${URL}/:status_code/person/:person_id/store/:store_id/:email`]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Errors Examples</Text>
      <Button 
        title='Make a network request' 
        onPress={() => makeRequest('GET', `${URL}/404/person/123/store/q2w3e/test@mail.com`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  title: {
    marginTop: 10
  }
});
