import { DocumentRenderer } from '@keystatic/core/renderer';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { View, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import data from 'src/api/data-updated.json';
import { renderers } from 'src/components/Renderers';
import {
  SimpleTabs,
  TpSimpleTab,
} from 'src/features/infection/components/Tabs';
import type { TpInfection } from 'src/features/main/types';
import type { RootStackParamList } from 'src/types';

import { styles } from './styles';

type TpInfectionProps = TpInfection;

export const Infection = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, 'Infection'>>();
  const { height } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState('ALL');
  const intl = useIntl();
  const item: TpInfection = useMemo(
    () => data.find((item) => item.id === id) || [],
    [id],
  );

  const { contraindications, reactionsAndComplications } = item;

  const tabOptions = useMemo(
    (): TpSimpleTab[] => [
      {
        id: 'ALL',
        label: intl.formatMessage({ id: 'tab.label.contraindications' }),
      },
      {
        id: 'IMPORTANT',
        label: intl.formatMessage({ id: 'tab.label.reactions' }),
      },
    ],
    [intl],
  );

  const handleTabs = useCallback((tab: TpSimpleTab) => {
    setActiveTab(tab.id);
  }, []);

  const RenderedTab = useCallback(() => {
    const tabLookup = {
      ALL: (
        <DocumentRenderer document={contraindications} renderers={renderers} />
      ),
      IMPORTANT: (
        <DocumentRenderer
          document={reactionsAndComplications}
          renderers={renderers}
        />
      ),
    };

    // @ts-ignore
    return tabLookup[activeTab] || <View />;
  }, [activeTab, contraindications, reactionsAndComplications]);
  return (
    <View>
      <SimpleTabs
        options={tabOptions}
        selectedOptionId={activeTab}
        onPress={handleTabs}
        style={styles.tabHead}
      />

      <ScrollView style={[styles.tabContent, { height: height - 130 }]}>
        <RenderedTab />
      </ScrollView>
    </View>
  );
};
