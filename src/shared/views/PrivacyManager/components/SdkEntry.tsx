import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { colors, gridUnit } from '../../../../constants';

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
      <Switch
        value={isActive}
        onValueChange={onStateChange}
        trackColor={{ false: colors.lightGrey }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: colors.black,
  },
});
