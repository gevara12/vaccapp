import { useMutation, useQueryClient } from '@tanstack/react-query';

import { completeMainStage } from 'src/api';

export const useCompleteMainStage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeMainStage,
    onSuccess: () => {
      queryClient.invalidateQueries(['stages']);
      queryClient.invalidateQueries(['progress']);
    },
  });
};

export default useCompleteMainStage;
