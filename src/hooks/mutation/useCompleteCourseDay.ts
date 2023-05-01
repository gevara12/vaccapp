import { useMutation, useQueryClient } from '@tanstack/react-query';

import { completeCourseDay } from 'src/api';

export const useCompleteCourseDay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeCourseDay,
    onSuccess: (_, variables) => {
      const { course_id } = variables;
      queryClient.invalidateQueries(['courses']);
      queryClient.invalidateQueries(['active_courses']);
      queryClient.invalidateQueries(['retrieve_course', course_id]);
    },
  });
};
