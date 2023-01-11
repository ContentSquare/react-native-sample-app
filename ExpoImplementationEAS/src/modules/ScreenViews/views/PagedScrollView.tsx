import Contentsquare from '@contentsquare/react-native-bridge';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, gridUnit } from '../../../constants';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const PagedScrollView: React.FunctionComponent = () => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // Sends screen view event when scrolling to one of the pages in the ScrollView
    Contentsquare.send(`Scroll page ${pageNumber}`);
  }, [pageNumber]);

  const PageContent: React.FunctionComponent<{ number: number }> = ({
    number,
  }) => (
    <View style={styles.pageContainer}>
      <Text style={[styles.text, styles.pageNumberText]}>{number}</Text>
      <Text style={styles.text}>
        This section showcases triggering screen views for each page of a paged
        scroll view.
      </Text>
      <Text style={styles.text}>Try scrolling horizontally.</Text>
    </View>
  );

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onScroll={event => {
        const pageIndex = Math.round(
          event.nativeEvent.contentOffset.x / SCREEN_WIDTH,
        );
        if (pageNumber - 1 !== pageIndex) {
          setPageNumber(pageIndex + 1);
        }
      }}>
      <PageContent number={1} />
      <PageContent number={2} />
      <PageContent number={3} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  text: {
    paddingHorizontal: gridUnit * 2,
    textAlign: 'center',
  },
  pageNumberText: {
    paddingBottom: gridUnit * 2,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
