export type TpToast = {
  type?: 'success' | 'danger' | 'warning' | 'default';
  text: string;
  hasHideButton?: boolean;
};

export type TpToastRender = TpToast & {
  id: number;
};
