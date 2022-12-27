import React from 'react';
import { WebView } from 'react-native-webview';
import { htmlPage } from './page';
import { useWebviews } from './useWebviews';

export const Webviews = () => {
  const { loadStart, loadEnd } = useWebviews();

  return (
    <WebView
      onLoadStart={loadStart}
      onLoadEnd={loadEnd}
      source={{ html: htmlPage }}
    />
  );
};
