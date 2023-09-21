import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import CrossIcon from 'src/assets/icons/ui/Cross.svg';
import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';
import { TpToastRender } from 'src/types';

import styles from './styles';

const Toast = (props: ToastProps) => {
  const { id, type = 'default', text, hasHideButton = false, onHide } = props;

  const colors = useTheme();

  const isDanger = type === 'danger';
  const isWarning = type === 'warning';

  const bgColor = () => {
    if (isDanger) return colors.ERROR_CONTAINER;
    if (isWarning) return colors.ERROR;
    return colors.SURFACE;
  };

  const textColor = () => {
    return colors.ON_BACKGROUND;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide(id);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [id, onHide]);

  return (
    <View style={[styles.container, { backgroundColor: bgColor() }]}>
      <NormalText style={[styles.text, { color: textColor() }]}>
        {text}
      </NormalText>
      {hasHideButton === true && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => onHide(id)}>
          <CrossIcon
            style={{
              // @ts-ignore (https://github.com/react-native-svg/react-native-svg/issues/1589)
              color: textColor(),
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

type ToastProps = TpToastRender & {
  onHide: (id: number) => void;
};

export default Toast;
