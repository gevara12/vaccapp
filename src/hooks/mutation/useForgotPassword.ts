import { useMutation } from '@tanstack/react-query';

import { forgotPassword } from 'src/api';
import {
  TpForgotPassword,
  TpForgotPasswordError,
  TpSuccessResponse,
} from 'src/types';

export const useForgotPassword = () => {
  return useMutation<
    TpSuccessResponse,
    TpForgotPasswordError,
    TpForgotPassword,
    unknown
  >({
    mutationFn: forgotPassword,
  });
};

export default useForgotPassword;
