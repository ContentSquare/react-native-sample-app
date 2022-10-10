import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Screens } from '../../../app/navigation/Screens';
import { useNavigation } from '../../../app/navigation/useNavigation';
import { colors } from '../../../constants';
import { ListItem } from './components/ListItem';
import { Separator } from './components/Separator';

export type ScreenConfig = {
  title: string;
  navigationScreen?: Screens;
};

type Props = {
  screensConfig: ScreenConfig[];
};

export const NavigationList: React.FunctionComponent<Props> = ({
  screensConfig,
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={screensConfig}
        renderItem={({ item }) => (
          <ListItem
            label={item.title}
            onPress={() => {
              item.navigationScreen && navigate(item.navigationScreen);
            }}
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
