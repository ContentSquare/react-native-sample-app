import { CSWebView } from '@contentsquare/react-native-bridge';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export const Webviews = () => {
  return (
    <View>
      <CSWebView>
        {/* Implementation 1: Webview as a child */}
        <WebView
          source={{
            uri: 'test.com',
          }}
        />
      </CSWebView>
      {/* Legacy implementation: render prop for webview */}
      <CSWebView
        url="test.com" // put your url here
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
    </View>
  );
};
