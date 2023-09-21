import React from 'react';
import { Text, TextProps } from 'react-native';

import { useTheme } from 'src/hooks';

import styles from './styles';

const HeadingText = (props: TextProps) => {
  const { style, ...otherProps } = props;

  const colors = useTheme();

  return (
    <Text
      style={[styles.text, { color: colors.PRIMARY }, style]}
      {...otherProps}
    />
  );
};

export default HeadingText;
