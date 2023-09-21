import React, { memo, useMemo, useRef } from 'react';
import { Animated, StyleProp } from 'react-native';
import FastImage, { Source as FastImageSource } from 'react-native-fast-image';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

import styles from './styles';

export const ProgressiveImage = (props: ProgressiveImageProps) => {
  const { source, style, ...restProps } = props;
  const imageAnimated = useRef(new Animated.Value(0)).current;

  const onImageLoad = (): void => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const fastImageSource: FastImageSource = useMemo(() => {
    return {
      ...source,
      priority: FastImage.priority.normal,
      //lib cache type error
      cache: FastImage.cacheControl.immutable,
    };
  }, [source]);

  return (
    <Animated.View
      style={[styles.container, style, { opacity: imageAnimated }]}>
      <FastImage
        {...restProps}
        source={fastImageSource}
        onLoad={onImageLoad}
        style={[styles.image]}
        resizeMode="cover"
      />
    </Animated.View>
  );
};

export interface ProgressiveImageProps {
  source: {
    uri: string;
  };
  style?: StyleProp<ViewProps>;
}

export default memo(ProgressiveImage);
