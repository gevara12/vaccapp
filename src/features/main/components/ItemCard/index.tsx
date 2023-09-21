import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ON_TERTIARY_CONTAINER } from 'src/app/Theme/dark';
import { Chip } from 'src/components/Chip';
import { NormalText } from 'src/components/NormalText';
import type { TpInfection } from 'src/features/main/types';
import { useTheme } from 'src/hooks';
import type { RootStackNavigationProp } from 'src/types';

import styles from './styles';

export const ItemCard = (props: TpInfection) => {
  const { title, id, vaccines } = props;
  const transformedVaccines = vaccines.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
  );

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
      style={[styles.host, { backgroundColor: colors.TERTIARY_CONTAINER }]}>
      <NormalText
        style={[styles.title, { color: colors.ON_TERTIARY_CONTAINER }]}>
        {title}
      </NormalText>

      <View style={styles.items}>
        {transformedVaccines.length > 0 &&
          transformedVaccines.map(({ name, slug, isAnimate }) => (
            <Chip
              style={[
                styles.item,
                {
                  borderColor:
                    isAnimate === 'animate' ? colors.TERTIARY : colors.ERROR,
                },
              ]}
              key={slug}>
              {name}
            </Chip>
          ))}
      </View>
    </TouchableOpacity>
  );
};
