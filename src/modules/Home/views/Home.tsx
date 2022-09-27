import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem } from '../../../shared/ListItem';
import { Separator } from '../../../shared/Separator';

const screensTitle = [
  'Screen views',
  'Privacy',
  'Dynamic variables',
  'Transactions',
  'Masking',
];

export const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={screensTitle}
        renderItem={item => <ListItem label={item.item} />}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
