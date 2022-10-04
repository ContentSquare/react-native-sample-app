import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { gridUnit } from '../../../../constants';

type Props = {
  logoSrc: ImageSourcePropType;
  sdkName: string;
  isActive: boolean;
  onStateChange: (value: boolean) => void;
};

export const SdkEntry = ({
  logoSrc,
  sdkName,
  isActive,
  onStateChange,
}: Props) => {
  return (
    <View style={styles.sdkEntryContainer}>
      <Image
        source={logoSrc}
        style={styles.sdkEntryLogo}
        resizeMode={'contain'}
      />
      <Text style={styles.sdkEntryName}>{sdkName}</Text>
      <Switch value={isActive} onValueChange={onStateChange} />
    </View>
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
    paddingVertical: gridUnit * 4,
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
    marginTop: 16,
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
