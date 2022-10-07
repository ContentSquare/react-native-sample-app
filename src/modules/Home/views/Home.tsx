import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants';
import { ListItem } from '../../../shared/views/NavigationList/components/ListItem';
import { Separator } from '../../../shared/views/NavigationList/components/Separator';
import { useHome } from './useHome';

export const Home: React.FunctionComponent = () => {
  const { screensConfig, onListItemPress } = useHome();

  return (
    <View style={styles.container}>
      <FlatList
        data={screensConfig}
        renderItem={({ item }) => (
          <ListItem label={item.title} onPress={() => onListItemPress(item)} />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
