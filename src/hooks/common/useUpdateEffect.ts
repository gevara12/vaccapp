import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useUpdateEffect = (
  callback: EffectCallback,
  dependencies: DependencyList,
): void => {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (mountedRef.current) {
      callback();
    }
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useUpdateEffect;
