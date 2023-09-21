export type TpLoginError = {
  status: string;
  message: string;
};

export type TpLogin = {
  email: string;
  password: string;
};

export type TpForgotPasswordError = {
  error?: string;
};

export type TpForgotPassword = {
  email: string;
};

export type TpUserInitialWeight = {
  weight: number;
  weight_units: string;
  is_metric_system: boolean;
};

export type TpUserWeight = {
  date: string;
  weight: number;
  weight_units: string;
};

export type TpUser = {
  id: number;
  is_anonymous_user: boolean;
  name: string;
  email: string;
  email_verified: boolean;
  receive_emails: boolean;
  accept_privacy: boolean;
  total_completed_days: number;
  exercises_done: number;
  mins_training: number;
  bmi: number;
  target_weight: number;
  target_weight_units: string;
  steps_daily_goal: number;
  floors_daily_goal: number;
  user_water_days_list: unknown[];
  user_activities_list: unknown[];
  user_diet_accesses_list: unknown[];
  initial_weight: TpUserInitialWeight;
  weights: TpUserWeight[];
  is_web_subscription_active: boolean;
  token: string;
};
