import { useQuery } from '@tanstack/react-query';

import { getInfectionsList } from 'src/api';

export const useGetInfections = () => {
  return useQuery({
    queryKey: ['stages'],
    queryFn: getInfectionsList,
  });
};
