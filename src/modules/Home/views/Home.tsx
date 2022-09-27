import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Screens } from '../../../app/navigation/Screens';
import { useNavigation } from '../../../app/navigation/useNavigation';
import { colors } from '../../../constants';
import { ListItem } from '../../../shared/ListItem';
import { Separator } from '../../../shared/Separator';

const screensTitle = [
  { title: 'Screen views', navigationScreen: Screens.SCREEN_VIEWS },
  { title: 'Privacy' },
  { title: 'Dynamic variables' },
  { title: 'Transactions' },
  { title: 'Masking' },
];

export const Home: React.FunctionComponent = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={screensTitle}
        renderItem={({ item }) => (
          <ListItem
            label={item.title}
            onPress={() =>
              item.navigationScreen
                ? navigate(item.navigationScreen)
                : undefined
            }
          />
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
