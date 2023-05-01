import { useQuery } from '@tanstack/react-query';

import { getProgress } from 'src/api';

export const useGetProgress = () => {
  return useQuery({
    queryKey: ['progress'],
    queryFn: getProgress,
  });
};
