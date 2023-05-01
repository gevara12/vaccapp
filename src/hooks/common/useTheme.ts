import { useContext } from 'react';

import { ThemeContext } from 'src/app';

export const useTheme = () => {
  return useContext(ThemeContext);
};
