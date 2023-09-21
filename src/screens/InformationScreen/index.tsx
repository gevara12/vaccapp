import { ScrollView } from 'react-native-gesture-handler';

import { NormalText } from 'src/components/NormalText';

import styles from './styles';

export const InformationScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <NormalText>InformationScreen</NormalText>
    </ScrollView>
  );
};
