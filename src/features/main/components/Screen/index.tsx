import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItem, TextInput, View } from 'react-native';

import data from 'src/api/data-updated.json';
import { ItemCard } from 'src/features/main/components/ItemCard';
import type { TpInfection } from 'src/features/main/types';
import { useTheme } from 'src/hooks';
import { RootStackNavigationProp } from 'src/types';

import styles from './styles';

const keyExtractor = ({ id }) => id;

export const MainScreen = () => {
  const { formatMessage } = useIntl();
  const colors = useTheme();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [text, onChangeText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const deferredQuery = useDeferredValue(text);
  const listData = useMemo(() => {
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        item.vaccines.some((vaccine) =>
          vaccine.name.toLowerCase().includes(deferredQuery.toLowerCase()),
        ),
    );
    // return data;
  }, [deferredQuery]);

  const placeholderMessage = formatMessage({
    id: 'input.location.placeholder',
    defaultMessage: 'Поиск',
  });

  // const [listVisible, setListVisible] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const renderItem: ListRenderItem<TpInfection> = ({ item }) => {
    return <ItemCard {...item} />;
  };

  const itemSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          { borderColor: isFocused ? colors.PRIMARY : colors.BORDER },
        ]}
        value={text}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChangeText={onChangeText}
        placeholder={placeholderMessage}
      />

      <FlashList
        data={listData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
