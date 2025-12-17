import {CSQWebView} from '@contentsquare/react-native-bridge';
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export const Webviews = () => {
  return (
    <View style={{flex: 1}}>
      <CSQWebView>
        <WebView
          source={{
            uri: 'https://docs.contentsquare.com/en/react-native/', // Replace with your WebView project URL
          }}
        />
      </CSQWebView>
    </View>
  );
};
