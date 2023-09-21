import { useContext } from 'react';

import { ToastContext } from 'src/features/toast';

export const useToast = () => {
  return useContext(ToastContext);
};
