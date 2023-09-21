import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { ThemeProvider } from 'src/app';
import { IntlProvider } from 'src/app/Intl';
import { ToastProvider } from 'src/features/toast';

import Navigation from '../../navigation';
import styles from './styles';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={styles.container}>
            <ToastProvider>
              <IntlProvider>
                <Navigation />
              </IntlProvider>
            </ToastProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
