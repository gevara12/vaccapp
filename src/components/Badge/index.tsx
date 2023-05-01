import { TextProps } from 'react-native';

import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';

import styles from './styles';

const Badge = (props: TextProps) => {
  const colors = useTheme();
  const { children, style, ...otherProps } = props;

  return (
    <NormalText
      style={[
        styles.host,
        {
          backgroundColor: colors.BG_SURFACE,
          color: colors.PRIMARY,
        },
        style,
      ]}
      {...otherProps}>
      {children}
    </NormalText>
  );
};

export default Badge;
