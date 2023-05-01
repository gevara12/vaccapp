import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { getMainStage } from 'src/api';
import { TpExercises } from 'src/types';

export const useGetMainStage = (
  params: { stage_number?: number },
  options?: { enabled?: boolean },
) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['main_stage', params.stage_number],
    queryFn: () => getMainStage(params),
    enabled: options?.enabled === undefined ? true : options.enabled,
    select: useCallback((data: TpExercises) => {
      const uniqueIds = new Set();

      return {
        ...data,
        exercises: data.exercises.filter((exercise) => {
          const isDuplicate = uniqueIds.has(exercise.id);
          uniqueIds.add(exercise.id);
          return exercise.title !== 'REST' && !isDuplicate;
        }),
      };
    }, []),
    initialData: () =>
      queryClient.getQueryData(['main_stage', params.stage_number]),
  });
};
