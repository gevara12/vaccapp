import { DocumentRendererProps } from '@keystatic/core/renderer';
import React from 'react';
import { Text } from 'react-native';

import { NormalText } from 'src/components/NormalText';

export const renderers: DocumentRendererProps['renderers'] = {
  inline: {
    bold: ({ children }) => {
      return <Text style={{ fontWeight: 'bold' }}>{children}</Text>;
    },
    italic: ({ children }) => {
      return <Text style={{ fontStyle: 'italic' }}>{children}</Text>;
    },
    underline: ({ children }) => {
      return (
        <Text style={{ textDecorationLine: 'underline' }}>{children}</Text>
      );
    },
  },
  block: {
    paragraph: ({ children, textAlign }) => {
      return <Text style={{ textAlign: 'center' }}>{children}</Text>;
    },
    heading: ({ level, children, textAlign }) => {
      if (level === 1) {
        return <Text style={{ fontSize: 32 }}>{children}</Text>;
      }
      return <Text>{children}</Text>;
    },
    list: ({ children }) => {
      return <Text>{children}</Text>;
    },
  },
};
