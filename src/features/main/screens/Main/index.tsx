import { FlashList } from '@shopify/flash-list';
import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItem, TextInput, View } from 'react-native';

import data from 'src/api/data-updated.json';
import { NormalText } from 'src/components/NormalText';
import { ItemCard } from 'src/features/main/components/ItemCard';
import type { TpInfection } from 'src/features/main/types';
import { useTheme } from 'src/hooks';

import LogoIcon from '../../../../../assets/logo.svg';
import styles from './styles';

const keyExtractor = ({ id }: { id: string }) => id;

export const MainScreen = () => {
  const { formatMessage } = useIntl();
  const colors = useTheme();
  const [text, onChangeText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const deferredQuery = useDeferredValue(text);
  const listData = useMemo(() => {
    return data
      .filter(
        (item) =>
          item.title.toLowerCase().includes(deferredQuery.toLowerCase()) ||
          item.vaccines.some((vaccine) =>
            vaccine.name.toLowerCase().includes(deferredQuery.toLowerCase()),
          ),
      )
      .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  }, [deferredQuery]);

  const placeholderMessage = formatMessage({
    id: 'input.location.placeholder',
    defaultMessage: 'Поиск',
  });

  const onFocusHandler = () => setIsFocused(true);

  const onBlurHandler = () => setIsFocused(false);

  const renderItem: ListRenderItem<TpInfection> = useCallback(
    ({ item }) => <ItemCard {...item} />,
    [],
  );

  const itemSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headRow,
          {
            // backgroundColor: 'blue'
          },
        ]}>
        <LogoIcon style={styles.logo} />
        <NormalText style={[styles.headText, { color: colors.PRIMARY }]}>
          VACCAPP
        </NormalText>
      </View>

      <TextInput
        placeholderTextColor={colors.ON_BACKGROUND}
        style={[
          styles.textInput,
          {
            borderColor: isFocused ? colors.PRIMARY : colors.OUTLINE,
          },
        ]}
        value={text}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChangeText={onChangeText}
        placeholder={placeholderMessage}
      />

      <FlashList
        data={listData}
        // @ts-expect-error renderItem is missing
        renderItem={renderItem}
        estimatedItemSize={120}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
