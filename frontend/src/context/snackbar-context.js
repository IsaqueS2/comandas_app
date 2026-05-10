import { createContext } from 'react';

export const SnackbarContext = createContext({
  message: '',
  severity: 'info',
  open: false,
  showSnackbar: () => {},
  closeSnackbar: () => {},
});
