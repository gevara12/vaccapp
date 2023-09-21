import { Provider } from 'react-native-paper';
import { ReactNode } from 'react';

export const PaperProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};
