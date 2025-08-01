import {CSWebView} from '@contentsquare/react-native-bridge';
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export const Webviews = () => {
  return (
    <View style={{flex: 1}}>
      <CSWebView>
        <WebView
          source={{
            uri: 'https://docs.contentsquare.com/en/react-native/', // Replace with your WebView project URL
          }}
        />
      </CSWebView>
    </View>
  );
};
