import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { getRetrieveCourse } from 'src/api';
import { TpCourseListData, TpDayCourse } from 'src/types';

export const useGetRetrieveCourse = (params: {
  course_id: number;
  date: string;
}) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['retrieve_course', params.course_id],
    queryFn: () => getRetrieveCourse(params),
    select: useCallback((data: TpDayCourse) => {
      return {
        id: data.id,
        coverImage: data.course_image,
        day_number: data.day_number,
        time_to_complete: data.time_to_complete,
        completed: data.completed,
        blocks: data.blocks.reduce<TpCourseListData[]>((acc, curr) => {
          acc.push({
            id: curr.id,
            title: curr.title,
            data: curr.exercises,
          });
          return acc;
        }, []),
      };
    }, []),
    initialData: () =>
      queryClient.getQueryData(['retrieve_course', params.course_id]),
  });
};
