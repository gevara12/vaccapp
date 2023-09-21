import { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Insets,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';

const HIT_SLOP: Insets = { top: 2, right: 2, left: 2, bottom: 2 };
const { width } = Dimensions.get('screen');

export type TpSimpleTab = {
  id: string;
  label: string;
};

const SimpleTab = (props: {
  selected: boolean;
  item: TpSimpleTab;
  onPress: (value: TpSimpleTab) => void;
  scrollToItem: (value: LayoutRectangle) => void;
}) => {
  const { selected, item, scrollToItem, onPress } = props;
  const colors = useTheme();

  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  }, []);

  useEffect(() => {
    if (selected && layout !== null) {
      scrollToItem(layout);
    }
  }, [selected, scrollToItem, layout]);

  return (
    <View style={styles.tab} onLayout={onLayout}>
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        key={item.id}
        onPress={() => onPress(item)}
        style={[
          styles.touchable,
          {
            backgroundColor: selected ? colors.PRIMARY : colors.SURFACE,
            borderColor: selected ? colors.PRIMARY : colors.OUTLINE,
            borderWidth: 1,
          },
        ]}>
        <NormalText
          style={[
            styles.text,
            {
              color: selected ? colors.ON_PRIMARY : colors.ON_SURFACE,
            },
          ]}>
          {item.label}
        </NormalText>
      </TouchableOpacity>
    </View>
  );
};

export const SimpleTabs = memo(
  ({
    options,
    selectedOptionId,
    onPress,
    style,
  }: {
    style?: StyleProp<ViewStyle>;
    options: TpSimpleTab[];
    selectedOptionId: string | number;
    onPress: (round: TpSimpleTab) => void;
  }) => {
    const colors = useTheme();
    const tabsRef = useRef<ScrollView>(null);

    const scrollToItem = useCallback((tabLayout: LayoutRectangle) => {
      if (tabsRef.current) {
        const x = tabLayout.x - (width - 12) / 2 + tabLayout.width / 2;
        tabsRef.current.scrollTo({ x, y: 0, animated: true });
      }
    }, []);

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={tabsRef}
        style={[styles.tabs, { borderColor: colors.FG_LIGHTER_5 }, style]}
        contentContainerStyle={styles.tabsInner}>
        {options.map((item) => (
          <SimpleTab
            key={item.id}
            selected={item.id === selectedOptionId}
            item={item}
            onPress={onPress}
            scrollToItem={scrollToItem}
          />
        ))}
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  tabs: {
    marginHorizontal: -16,
    paddingTop: 12,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  tabsInner: {
    paddingHorizontal: 12,
  },
  tab: {
    paddingHorizontal: 4,
  },
  touchable: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 17,
  },
});
