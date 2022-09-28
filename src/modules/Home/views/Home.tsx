import Contentsquare from '@contentsquare/react-native-bridge';
import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants';
import { ListItem } from '../../../shared/ListItem';
import { Separator } from '../../../shared/Separator';
import { useHome } from '../hooks/useHome';

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
      <Button
        title="optin"
        onPress={() => {
          Contentsquare.optIn();
        }}
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
