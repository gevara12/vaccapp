import { ReactElement } from 'react';
import { View } from 'react-native';

import { useTheme } from 'src/hooks';

import styles from './styles';

const TabIcon = (props: TabIconProps) => {
  const { children, focused } = props;
  const colors = useTheme();
  return (
    <View
      style={[
        styles.icon,
        {
          backgroundColor: focused ? colors.BG_DISABLED : colors.LIGHTER,
        },
      ]}>
      {children}
    </View>
  );
};

type TabIconProps = {
  focused: boolean;
  children: ReactElement;
};

export default TabIcon;
