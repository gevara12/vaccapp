import {
  ActivityIndicator as Loader,
  ActivityIndicatorProps as LoaderProps,
  View,
} from 'react-native';

import { useTheme } from 'src/hooks';

import { NormalText } from '../NormalText';
import styles from './styles';

const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const { theme = 'dark', size = 'small', label } = props;
  const colors = useTheme();

  const isDark = theme === 'dark';

  return (
    <View style={styles.container}>
      <Loader size={size} color={isDark ? colors.PRIMARY : colors.LIGHTER} />
      {label !== undefined && (
        <NormalText
          style={[
            styles.label,
            { color: isDark ? colors.PRIMARY : colors.LIGHTER },
          ]}>
          {label}
        </NormalText>
      )}
    </View>
  );
};

type ActivityIndicatorProps = LoaderProps & {
  theme?: 'light' | 'dark';
  label?: string;
};

export default ActivityIndicator;
