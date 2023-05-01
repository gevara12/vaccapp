import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Chip } from 'src/components/Chip';
import { NormalText } from 'src/components/NormalText';
import type { TpInfection } from 'src/features/main/types';
import { useTheme } from 'src/hooks';
import type { RootStackNavigationProp } from 'src/types';

import styles from './styles';

export const ItemCard = (props: TpInfection) => {
  const { title, id, vaccines } = props;

  const colors = useTheme();
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPressHandler = useCallback(
    (itemId: string) =>
      navigation.navigate('Infection', {
        id: itemId,
      }),
    [navigation],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPressHandler(id)}
      style={[
        styles.host,
        {
          backgroundColor: colors.SURFACE,
          // borderColor:
          //   type === 'inanimate' ? colors.BG_SECONDARY : colors.BG_TERTIARY,
        },
      ]}>
      <NormalText style={[styles.title, { color: colors.ON_SURFACE }]}>
        {title}
      </NormalText>
      <View style={styles.items}>
        {vaccines.length > 0 &&
          vaccines.map((vaccine) => (
            <Chip style={styles.item} key={vaccine.slug}>
              {vaccine.name}
            </Chip>
          ))}
      </View>
    </TouchableOpacity>
  );
};
