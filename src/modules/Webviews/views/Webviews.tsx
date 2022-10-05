import React, { FunctionComponent } from 'react';
import { WebView } from 'react-native-webview';
import { htmlPage } from './page';

export const Webviews: FunctionComponent = () => {
  return <WebView source={{ html: htmlPage }} />;
};
