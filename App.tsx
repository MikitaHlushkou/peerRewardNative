import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { SafeAreaView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaView>
        </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
};

export default App;
