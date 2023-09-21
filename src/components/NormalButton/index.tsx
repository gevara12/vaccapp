import React, { ReactElement, isValidElement, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'src/hooks';

import ActivityIndicator from '../ActivityIndicator';
import { NormalText } from '../NormalText';
import styles from './styles';

const NormalButton = (props: NormalButtonProps) => {
  const {
    size = 'normal',
    text = '',
    loading = false,
    disabled = false,
    style,
    ...otherProps
  } = props;

  const colors = useTheme();

  const renderContent = useMemo(() => {
    if (loading) {
      return <ActivityIndicator theme={disabled ? 'light' : 'dark'} />;
    }

    if (isValidElement(text)) return text;

    return (
      <NormalText
        style={[
          styles.text,
          {
            color: disabled ? colors.PRIMARY_TEXT_DISABLED : colors.LIGHTER,
          },
        ]}>
        {text}
      </NormalText>
    );
  }, [text, loading, disabled, colors]);

  return (
    <TouchableOpacity
      style={[
        styles[size],
        {
          backgroundColor: disabled ? colors.PRIMARY_DISABLED : colors.PRIMARY,
        },
        style,
      ]}
      activeOpacity={0.85}
      {...otherProps}>
      {renderContent}
    </TouchableOpacity>
  );
};

type NormalButtonProps = TouchableOpacityProps & {
  text?: string | number | ReactElement;
  size?: 'normal' | 'large';
  loading?: boolean;
};

export default NormalButton;
