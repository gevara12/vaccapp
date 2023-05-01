import React, { ReactElement, createContext } from 'react';
import { useColorScheme } from 'react-native';

import * as darkColors from './dark';
import * as lightColors from './light';

export const ThemeContext = createContext(darkColors);

export const ThemeProvider = (props: ThemeProvider) => {
  const { children } = props;
  const colorScheme = useColorScheme();

  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>
  );
};

type ThemeProvider = {
  children: ReactElement;
};
