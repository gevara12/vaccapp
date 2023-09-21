import { ReactElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

const TabIcon = (props: TabIconProps) => {
  const { children } = props;
  return <View style={[styles.icon]}>{children}</View>;
};

type TabIconProps = {
  focused: boolean;
  children: ReactElement;
};

export default TabIcon;
