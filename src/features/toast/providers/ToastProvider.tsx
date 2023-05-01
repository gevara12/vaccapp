import {
  ReactElement,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { noop } from 'src/services';
import { TpToast, TpToastRender } from 'src/types';

import ToastManager from '../components/ToastManager';

export const ToastContext = createContext<{
  onShowToast: (params: TpToast) => void;
}>({
  onShowToast: noop,
});

const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;
  const [toasts, setToasts] = useState<TpToastRender[]>([]);

  const onHideToast = useCallback((id: number) => {
    setToasts((prevToasts) => {
      const nextToasts = prevToasts.filter((toast) => toast.id !== id);
      return nextToasts;
    });
  }, []);

  const onShowToast = useCallback((params: TpToast) => {
    setToasts((prevToasts) => {
      const toast: TpToastRender = {
        id: Date.now(),
        ...params,
      };

      return [...prevToasts, toast];
    });
  }, []);

  const value = useMemo(() => {
    return {
      onShowToast,
    };
  }, [onShowToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastManager toasts={toasts} onHide={onHideToast} />
    </ToastContext.Provider>
  );
};

type ToastProviderProps = {
  children: ReactElement;
};

export default ToastProvider;
