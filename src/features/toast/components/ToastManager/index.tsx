import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Space from 'src/components/Space';
import { TpToastRender } from 'src/types';

import Toast from '../Toast';
import styles from './styles';

const ToastManager = (props: ToastManagerProps) => {
  const { toasts, onHide } = props;
  const insets = useSafeAreaInsets();

  if (toasts.length === 0) return null;
  return (
    <View style={[styles.container, { bottom: 80 + 16 + insets.bottom }]}>
      {toasts.map((toast, index) => {
        const isLast = index === toasts.length - 1;
        return (
          <>
            <Toast key={toast.id} {...toast} onHide={onHide} />
            {!isLast && <Space gap={8} />}
          </>
        );
      })}
    </View>
  );
};

type ToastManagerProps = {
  toasts: TpToastRender[];
  onHide: (id: number) => void;
};

export default ToastManager;
