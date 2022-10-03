import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { usePrivacyManager } from './usePrivacyManager';

export const PrivacyManager = () => {
  const { isPrivacyManagerVisible, setIsPrivacyManagerVisible } =
    usePrivacyManager();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isPrivacyManagerVisible}
      onRequestClose={() => {
        setIsPrivacyManagerVisible(!isPrivacyManagerVisible);
      }}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setIsPrivacyManagerVisible(!isPrivacyManagerVisible)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
