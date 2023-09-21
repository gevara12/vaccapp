import { useMutation } from '@tanstack/react-query';

import { login } from 'src/api';
import { TpLogin, TpLoginError, TpUser } from 'src/types';

export const useLogin = () => {
  return useMutation<TpUser, TpLoginError, TpLogin, unknown>({
    mutationFn: login,
  });
};

export default useLogin;
