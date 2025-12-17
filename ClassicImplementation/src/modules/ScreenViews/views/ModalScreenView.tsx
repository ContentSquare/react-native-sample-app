import {CSQ} from '@contentsquare/react-native-bridge';
import React, {useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {colors, gridUnit} from '../../../constants';

export const ModalScreenView: React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // As react native modals are not new screens, we need to send events manually on modal show/dismiss
    // On every modal visibility switch, we send an event with whether the "background" page or the modal name
    CSQ.trackScreenview(isModalVisible ? 'Modal' : 'Modal presenter');
  }, [isModalVisible]);

  return (
    <View style={styles.container}>
      <Button title="Present modal" onPress={() => setIsModalVisible(true)} />
      <Text style={styles.text}>
        Tapping the button will present a modal. When the modal opens, it sends
        a screen view, and when it's closed, this screen will also send a screen
        view.
      </Text>
      <Modal
        animationType="slide"
        presentationStyle={'pageSheet'}
        visible={isModalVisible}>
        <View style={styles.container}>
          <Button
            title="Dismiss modal"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: gridUnit * 2,
  },
  text: {
    paddingTop: gridUnit * 2,
    textAlign: 'center',
  },
});
