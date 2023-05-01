import { useContext } from 'react';

import { ThemeContext } from './index';

export const useTheme = () => {
  return useContext(ThemeContext);
};
