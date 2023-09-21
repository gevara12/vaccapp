import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Route, TabViewProps } from 'react-native-tab-view';

import { TabBarItem } from '../TabBarItem';

// import { Measure } from './types';

type Props<T extends Route> = Parameters<
  NonNullable<TabViewProps<T>['renderTabBar']>
>[0] & {
  onIndexChange: (index: number) => void;
};

export const TabBar = <T extends Route>(props: Props<T>) => {
  const containerRef = useRef<View | null>(null);
  const inputRange = props.navigationState.routes.map((_, i) => i);

  const refs = useMemo(
    () =>
      [...new Array(props.navigationState.routes.length)].map(() =>
        React.createRef<View>(),
      ),
    [props.navigationState.routes.length],
  );

  // useEffect(() => {
  //    const measureValues: Measure[] = [];
  //
  //   setTimeout(() => {
  //     refs.forEach((r) => {
  //       if (!r.current) {
  //         return;
  //       }
  //
  //       r.current.measureLayout(
  //         containerRef.current as any,
  //         (x, y, width, height) => {
  //           measureValues.push({
  //             x,
  //             y,
  //             width,
  //             height,
  //           });
  //         },
  //         () => {},
  //       );
  //     });
  //   });
  // }, [refs]);

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(255, 255, 255, 0.24)',
      }}
      ref={containerRef}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputRangeIndex) =>
            inputRangeIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <TabBarItem
            key={i}
            onPress={props.onIndexChange}
            index={i}
            opacity={opacity}
            ref={refs[i]}>
            {route.title}
          </TabBarItem>
        );
      })}
    </View>
  );
};
