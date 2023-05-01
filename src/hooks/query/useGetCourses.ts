import { useQuery } from '@tanstack/react-query';

import { getCourses } from 'src/api';

export const useGetCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
  });
};
