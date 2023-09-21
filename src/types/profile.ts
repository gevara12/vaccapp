export enum EmProfileMenuItem {
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  ACTIVITY_GUIDELINES,
  DELETE_ACCOUNT,
  HAVE_QUESTIONS,
  RESET_CACHE,
}

export type TpProfileConfig = {
  id: EmProfileMenuItem;
  label: string;
  action?: () => void;
  arrow?: boolean;
  dev?: boolean;
};
