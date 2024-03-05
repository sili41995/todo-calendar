import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export default queryClient;
