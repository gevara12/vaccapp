import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import WelcomePicture from 'src/assets/picture/welcome-picture.svg';
import HeadingText from 'src/components/HeadingText';
import NormalButton from 'src/components/NormalButton';
import { NormalText } from 'src/components/NormalText';
import { useTheme } from 'src/hooks';
import { AuthStackNavigationProp } from 'src/types';

import styles from './styles';

const WelcomeScreen = () => {
  const colors = useTheme();
  const navigation = useNavigation<AuthStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.icon}>
          <WelcomePicture />
        </View>
        <HeadingText style={styles.title}>Welcome to Mimika</HeadingText>
        <NormalText style={[styles.text, { color: colors.SECONDARY }]}>
          Facial Yoga Exercises
        </NormalText>
        <NormalButton
          text="Log in"
          onPress={() => navigation.replace('LogIn')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
