import { CSWebView } from '@contentsquare/react-native-bridge';
import React from 'react';
import { WebView } from 'react-native-webview';

export const Webviews = () => {
  return (
    <CSWebView
      url="" // put your url here
      renderWebView={(onLayout, webViewUrl) => {
        return (
          <WebView
            onLayout={onLayout}
            source={{
              uri: webViewUrl,
            }}
          />
        );
      }}
    />
  );
};
