import React from 'react';
import { Button, Modal, Pressable, StyleSheet, View } from 'react-native';
import contentsquareLogo from '../../../../assets/images/new_contentsquare.png';
import { gridUnit } from '../../../constants';
import { SdkEntry } from './components/SdkEntry';
import { usePrivacyManager } from './usePrivacyManager';

/**
 * This privacy manager component should be replaced in your app by a proper GDPR sdk
 * which goal is to get user tracking consent and allow him/her to modify this consent later
 */

export const PrivacyManager = () => {
  const {
    isPrivacyManagerVisible,
    setIsPrivacyManagerVisible,
    isContentSquareActive,
    onContentSquareActiveChange,
    onAcceptAllPress,
    onRefuseAllPress,
    onSubmit,
  } = usePrivacyManager();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isPrivacyManagerVisible}
      onRequestClose={() => {
        setIsPrivacyManagerVisible(!isPrivacyManagerVisible);
      }}
    >
      <View style={styles.container}>
        <Pressable
          style={styles.backdrop}
          onPress={() => {
            setIsPrivacyManagerVisible(false);
          }}
        />
        <View style={styles.modalView}>
          <SdkEntry
            logoSrc={contentsquareLogo}
            sdkName="Contentsquare"
            isActive={isContentSquareActive}
            onStateChange={onContentSquareActiveChange}
          />
          <View style={styles.actionsContainer}>
            <Button title="Tout refuser" onPress={onRefuseAllPress} />
            <Button title="Tout accepter" onPress={onAcceptAllPress} />
            <Button title="Valider" onPress={onSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(50,50,50,0.5)',
    flex: 1,
  },
  backdrop: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: gridUnit,
    borderTopRightRadius: gridUnit,
    paddingVertical: gridUnit * 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: gridUnit / 2,
    elevation: 5,
    width: '100%',
  },
  actionsContainer: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginTop: 2 * gridUnit,
    padding: gridUnit,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sdkEntryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: gridUnit * 2,
  },
  sdkEntryLogo: {
    height: gridUnit * 4,
    width: gridUnit * 4,
  },
  sdkEntryName: {
    flex: 1,
  },
});
