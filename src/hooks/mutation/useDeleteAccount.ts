import { useMutation } from '@tanstack/react-query';

import { deleteAccount } from 'src/api';

export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: deleteAccount,
  });
};

export default useDeleteAccount;
