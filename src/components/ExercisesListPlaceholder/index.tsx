import { memo, useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from 'src/hooks';

import styles from './styles';

const ExercisesListPlaceholder = () => {
  const colors = useTheme();

  const placeholderItem = useMemo(() => {
    return (
      <View style={styles.container}>
        <View
          style={[styles.image, { backgroundColor: colors.PRIMARY_DISABLED }]}
        />
        <View style={styles.text}>
          <View
            style={[styles.title, { backgroundColor: colors.PRIMARY_DISABLED }]}
          />
          <View
            style={[
              styles.description,
              { backgroundColor: colors.PRIMARY_DISABLED },
            ]}
          />
        </View>
      </View>
    );
  }, [colors]);

  const renderSeparator = useMemo(() => {
    return (
      <View style={styles.separator}>
        <View
          style={[
            styles.separatorLine,
            { backgroundColor: colors.PRIMARY_DISABLED },
          ]}
        />
      </View>
    );
  }, [colors]);

  return (
    <>
      {placeholderItem}
      {renderSeparator}
      {placeholderItem}
      {renderSeparator}
      {placeholderItem}
    </>
  );
};

export default memo(ExercisesListPlaceholder);
