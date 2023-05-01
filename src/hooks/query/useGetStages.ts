import { useQuery } from '@tanstack/react-query';

import { getStages } from 'src/api';

export const useGetStages = () => {
  return useQuery({
    queryKey: ['stages'],
    queryFn: getStages,
  });
};
