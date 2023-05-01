import { DocumentRenderer } from '@keystatic/core/renderer';
import { RouteProp, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { View } from 'react-native';

import data from 'src/api/data-updated.json';
import { NormalText } from 'src/components/NormalText';
import { renderers } from 'src/components/Renderers';
import { useTheme } from 'src/hooks';
import type { RootStackParamList } from 'src/types';

export const Infection = memo(() => {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, 'Infection'>>();
  const colors = useTheme();
  const item = data.find((item) => item.id === id);
  // console.log('item', JSON.stringify(item, null, 2));
  const { title, contraindications, reactionsAndComplications } = item;

  console.log('title', title);

  return (
    <View>
      <NormalText>{title}</NormalText>

      {/*{vaccines.map((vaccine) => (*/}
      {/*  <NormalText>{vaccine.title}</NormalText>*/}
      {/*))}*/}

      <DocumentRenderer document={contraindications} renderers={renderers} />
      <DocumentRenderer
        document={reactionsAndComplications}
        renderers={renderers}
      />
    </View>
  );
});
