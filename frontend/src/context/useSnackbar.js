import { useContext } from 'react';
import { SnackbarContext } from './snackbar-context';

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar deve ser usado dentro de SnackbarProvider');
  }
  return context;
};

export default useSnackbar;
