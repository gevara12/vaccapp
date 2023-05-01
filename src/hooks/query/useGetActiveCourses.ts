import { useQuery } from '@tanstack/react-query';

import { getActiveCourses } from 'src/api';

export const useGetActiveCourses = () => {
  return useQuery({
    queryKey: ['active_courses'],
    queryFn: getActiveCourses,
  });
};
