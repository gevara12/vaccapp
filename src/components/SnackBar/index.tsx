// import { useState } from 'react';
import { ReactNode } from 'react';
import { View } from 'react-native';

import NormalText from 'src/components/NormalText';
import { useTheme } from 'src/hooks';

import styles from './styles';

const SnackBar = (props: TpSnackBarProps) => {
  const { icon, text, endSlot } = props;
  const colors = useTheme();
  // const [snackVisible, setSnackVisible] = useState(false);

  return (
    <View
      style={[
        styles.host,
        styles.elevation,
        { backgroundColor: colors.BG_SURFACE_CONTRAST },
      ]}>
      <View style={styles.row}>
        {Boolean(icon) && <View style={styles.icon}>{icon}</View>}
        <NormalText style={styles.text}>{text}</NormalText>
        {Boolean(endSlot) && <View style={styles.endSlot}>{endSlot}</View>}
      </View>
    </View>
  );
};

type TpSnackBarProps = {
  text: string;
  icon?: ReactNode;
  endSlot?: ReactNode;
};

export default SnackBar;
