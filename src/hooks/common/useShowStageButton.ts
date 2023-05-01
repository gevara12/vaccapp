import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

export const useShowStageButton = ({ scrollTriggerValue = 0 }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);
  const translation = useRef(new Animated.Value(100)).current;

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrolling = event.nativeEvent.contentOffset.y;
      if (scrolling >= scrollTriggerValue) {
        setIsButtonShown(true);
      } else {
        setIsButtonShown(false);
      }
    },
    [scrollTriggerValue],
  );

  useEffect(() => {
    Animated.timing(translation, {
      toValue: isButtonShown ? 0 : 100,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [isButtonShown, translation]);

  return {
    translation,
    onScroll,
  };
};
