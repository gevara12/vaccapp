import { DocumentRendererProps } from '@keystatic/core/renderer';
import React from 'react';
import { Text } from 'react-native';

import { NormalText } from 'src/components/NormalText';

import { styles } from './styles';

export const renderers: DocumentRendererProps['renderers'] = {
  inline: {
    bold: ({ children }) => (
      <NormalText style={styles.bold}>{children}</NormalText>
    ),
    italic: ({ children }) => (
      <NormalText style={{ fontFamily: 'Montserrat-ExtraLightItalic' }}>
        {children}
      </NormalText>
    ),
    underline: ({ children }) => (
      <Text style={{ textDecorationLine: 'underline' }}>{children}</Text>
    ),
  },
  block: {
    paragraph: ({ children, textAlign }) => (
      <NormalText style={styles.paragraph}>{children}</NormalText>
    ),
    heading: ({ level, children, textAlign }) => {
      const stylesObject = {
        4: [styles.fz18],
        3: [styles.fz24],
        2: [styles.fz28],
        1: [styles.fz32],
      };

      // @ts-ignore
      const customStyles = stylesObject[level];

      return (
        <NormalText style={[styles.bold, customStyles]}>{children}</NormalText>
      );
    },
    list: ({ children }) => <NormalText>{children}</NormalText>,
  },
};
