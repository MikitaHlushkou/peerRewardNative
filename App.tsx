import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-native-paper';

// hooks
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { AuthProvider } from './hooks/useAuth';
// UI
import Navigation from './navigation';
// styles
import { theme } from './themesConfig/theme';

const queryClient = new QueryClient();

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider theme={theme}>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
              <AuthProvider>
                <Navigation colorScheme={colorScheme} />
              </AuthProvider>
            </SafeAreaView>
          </SafeAreaProvider>
        </Provider>
      </QueryClientProvider>
    );
  }
};

export default App;
