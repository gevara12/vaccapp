import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ToastProvider } from 'src/features/toast';
import Navigation from 'src/navigation';

import { IntlProvider } from 'src/app/Intl';
import { PaperProvider } from 'src/app/Paper';

import styles from './styles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider>
          <GestureHandlerRootView style={styles.container}>
            <ToastProvider>
              <IntlProvider>
                <Navigation />
              </IntlProvider>
            </ToastProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
