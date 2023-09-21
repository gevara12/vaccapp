import axios from 'src/axios';
import {
  TpForgotPassword,
  TpLogin,
  TpSuccessResponse,
  TpUser,
} from 'src/types';

export const login = async (params: TpLogin): Promise<TpUser> => {
  const formData = new FormData();
  formData.append('email', params.email);
  formData.append('password', params.password);
  const { data } = await axios.post('/v1/sign_in_email/', formData);
  return data;
};

export const forgotPassword = async (
  params: TpForgotPassword,
): Promise<TpSuccessResponse> => {
  const formData = new FormData();
  formData.append('email', params.email);
  const { data } = await axios.post('/v1/send_forgot_password/', formData);
  return data;
};

export const deleteAccount = async (): Promise<unknown> => {
  const { data } = await axios.post('/v1/delete_user/');
  return data;
};
