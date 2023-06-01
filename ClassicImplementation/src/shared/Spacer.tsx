import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

export const Spacer: FunctionComponent<Props> = ({ height = 0, width = 0 }) => {
  return <View style={{ height, width }} />;
};
