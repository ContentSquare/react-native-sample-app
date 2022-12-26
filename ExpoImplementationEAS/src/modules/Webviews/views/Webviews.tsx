import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useLayoutEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import { htmlPage } from './page';

export const Webviews = () => {
  const [webViewNativeTag, setWebviewNativeTag] = useState<number>();
  const [injectedWebViewTag, setInjectedWebViewTag] = useState<number>();

  const loadStart = (event: WebViewNavigationEvent) => {
    // react-native-webview typing for nativeEvent.target is not correct
    // @ts-ignore
    const webViewTag = event.nativeEvent.target as number;
    if (webViewTag) {
      setWebviewNativeTag(webViewTag);
    }
  };

  const loadEnd = () => {
    if (
      webViewNativeTag !== undefined &&
      webViewNativeTag !== injectedWebViewTag
    ) {
      // @ts-ignore
      Contentsquare.injectWebView(webViewNativeTag);
      setInjectedWebViewTag(webViewNativeTag);
    }
  };

  useLayoutEffect(() => {
    return () => {
      if (webViewNativeTag !== undefined) {
        // @ts-ignore
        Contentsquare.removeWebViewInjection(webViewNativeTag);
      }
    };
  }, [webViewNativeTag]);

  return (
    <WebView
      onLoadStart={loadStart}
      onLoadEnd={loadEnd}
      source={{ html: htmlPage }}
    />
  );
};
