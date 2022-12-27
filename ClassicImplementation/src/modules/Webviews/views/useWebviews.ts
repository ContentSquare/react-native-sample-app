import Contentsquare from '@contentsquare/react-native-bridge';
import { useLayoutEffect, useState } from 'react';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';

export const useWebviews = () => {
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
      if (injectedWebViewTag !== undefined) {
        // @ts-ignore
        Contentsquare.removeWebViewInjection(injectedWebViewTag);
      }
    };
  }, [injectedWebViewTag]);

  return { loadStart, loadEnd };
};
