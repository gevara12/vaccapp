import { useNavigation } from '@react-navigation/native';
import { Insets, TouchableOpacity, View } from 'react-native';

import ChevronLeft from 'src/assets/icons/ui/ChevronLeft.svg';
import HeadingText from 'src/components/HeadingText';
import { useTheme } from 'src/hooks';

import styles from './styles';

const HIT_SLOP: Insets = { top: 10, right: 10, left: 10, bottom: 10 };

const HeaderLeft = (props: HeaderLeftProps) => {
  const { label } = props;
  const navigation = useNavigation();
  const colors = useTheme();

  return (
    <View style={styles.headerLeft}>
      <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => navigation.goBack()}>
        <ChevronLeft
          style={{
            // @ts-ignore (https://github.com/react-native-svg/react-native-svg/issues/1589)
            color: colors.PRIMARY,
          }}
        />
      </TouchableOpacity>
      {label !== undefined && (
        <HeadingText style={styles.title}>{label}</HeadingText>
      )}
    </View>
  );
};

type HeaderLeftProps = {
  label?: string;
};

export default HeaderLeft;
