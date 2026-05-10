import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { SnackbarContext } from './snackbar-context';

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const showSnackbar = (msg, sev = 'info') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    closeSnackbar();
  };

  return (
    <SnackbarContext.Provider value={{ message, severity, open, showSnackbar, closeSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
