/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React, { useEffect } from 'react';
import {
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import Contentsquare from '@contentsquare/react-native-bridge';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // TODO: Sessions without at least one screenview will be discarded.
    Contentsquare.send('InitialRouteName');

    Linking.addEventListener('url', (event: { url: string }) => {
      Contentsquare.handleUrl(event.url);
    });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}
      >
        <Section title="Contentsquare SDK and Adobe Analytics Integration">
          In this sample app, we are showcasing the integration of Contentsquare
          SDK and Adobe Analytics.
        </Section>
        <Section>
          Find implementation instructions in the{' '}
          <Text style={styles.highlight}>adobe-analytics.ts</Text> file in the
          app's root.
        </Section>
        <Section>
          Unleash data insights and optimize user experiences with this powerful
          combination.
        </Section>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
