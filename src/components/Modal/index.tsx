import { ReactElement, useMemo } from 'react';
import {
  Modal as RNModal,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from 'src/hooks';

import NormalButton from '../NormalButton';
import { NormalText } from '../NormalText';
import { Space } from '../Space';
import styles from './styles';

const Modal = (props: ModalProps) => {
  const {
    children,
    buttons,
    buttonPrimaryText = '',
    buttonPrimaryOnPress,
    buttonPrimaryDisabled,
    buttonPrimaryLoading,
    buttonSecondaryText,
    buttonSecondaryOnPress,
    buttonSecondaryDisabled,
  } = props;
  const colors = useTheme();

  const renderButtons = useMemo(() => {
    if (buttons === 'one-way') {
      return (
        <View style={styles.buttons}>
          <NormalButton
            disabled={buttonPrimaryDisabled}
            loading={buttonPrimaryLoading}
            text={buttonPrimaryText}
            onPress={buttonPrimaryOnPress}
          />
        </View>
      );
    }

    if (buttons === 'two-way') {
      return (
        <View style={[styles.buttons, styles.buttonsTwoWay]}>
          <TouchableOpacity
            style={styles.button}
            onPress={buttonSecondaryOnPress}
            activeOpacity={0.85}
            disabled={buttonSecondaryDisabled}>
            <NormalText style={styles.buttonText}>
              {buttonSecondaryText}
            </NormalText>
          </TouchableOpacity>
          <Space gap={8} horizontal />
          <NormalButton
            disabled={buttonPrimaryDisabled}
            loading={buttonPrimaryLoading}
            text={buttonPrimaryText}
            onPress={buttonPrimaryOnPress}
          />
        </View>
      );
    }

    return null;
  }, [
    buttons,
    buttonPrimaryText,
    buttonSecondaryText,
    buttonPrimaryOnPress,
    buttonSecondaryOnPress,
    buttonSecondaryDisabled,
    buttonPrimaryLoading,
    buttonPrimaryDisabled,
  ]);

  return (
    <RNModal visible transparent>
      <StatusBar backgroundColor="#000" />
      <View style={styles.container}>
        <View style={[styles.content, { backgroundColor: colors.BACKGROUND }]}>
          {children}
          {renderButtons}
        </View>
      </View>
    </RNModal>
  );
};

type ModalProps = {
  children: ReactElement;
  buttons?: 'one-way' | 'two-way';
  buttonPrimaryText?: string;
  buttonPrimaryOnPress?: () => void;
  buttonPrimaryDisabled?: boolean;
  buttonPrimaryLoading?: boolean;
  buttonSecondaryText?: string;
  buttonSecondaryOnPress?: () => void;
  buttonSecondaryDisabled?: boolean;
};

export default Modal;
