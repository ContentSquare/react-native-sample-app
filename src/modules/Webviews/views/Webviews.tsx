import Contentsquare from '@contentsquare/react-native-bridge';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import { htmlPage } from './page';

export const Webviews: FunctionComponent = () => {
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    // When useEffect is called, we inject our WebView.
    // We do not have state changes in this component, so we do not protect the call.

    Contentsquare.send('Webviews');

    Contentsquare.injectWebView(webViewRef);
    webViewRef.current;

    return () => {
      // We are removing the injection in the return function, which is run when this component unmounts.
      Contentsquare.removeWebViewInjection(webViewRef);
    };
  }, [webViewRef]);

  // Contentsquare sdk is not compatible with react-native-webview >= 11.21
  return <WebView source={{ html: htmlPage }} ref={webViewRef} />;
};
