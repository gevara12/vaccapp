import { Animated, TouchableOpacity } from 'react-native';

import PlayIcon from 'src/assets/icons/ui/Play.svg';
import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';

import styles from './styles';

export const STAGE_BUTTON_HEIGHT = 76;

const StageButton = (props: StageButtonProps) => {
  const { stage_number, translation, onPress } = props;

  const colors = useTheme();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: STAGE_BUTTON_HEIGHT,
          transform: [{ translateY: translation }],
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[styles.button, { backgroundColor: colors.PRIMARY }]}>
        <PlayIcon />
        <NormalText
          style={[
            styles.buttonText,
            {
              color: colors.LIGHTER,
            },
          ]}>{`Start Day ${stage_number}`}</NormalText>
      </TouchableOpacity>
    </Animated.View>
  );
};

type StageButtonProps = {
  stage_number: number;
  translation: Animated.Value;
  onPress: () => void;
};

export default StageButton;
