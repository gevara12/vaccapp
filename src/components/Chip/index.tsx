import React from 'react';
import { TextStyle } from 'react-native';

import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';

import { styles } from './styles';

export const Chip = (props: {
  children: React.ReactNode;
  style: TextStyle;
}) => {
  const colors = useTheme();
  const { style, ...otherProps } = props;

  return (
    <NormalText
      style={[
        style,
        styles.text,
        {
          color: colors.ON_SURFACE,
        },
      ]}
      {...otherProps}
    />
  );
};
