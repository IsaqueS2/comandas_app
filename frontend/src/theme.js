import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#1e40af', light: '#3b82f6' }, // Azul escuro profissional
        secondary: { main: '#7c3aed', light: '#a855f7' }, // Roxo
        success: { main: '#059669' },
        error: { main: '#dc2626', light: '#ef4444' },
        warning: { main: '#d97706' },
        info: { main: '#0284c7' },
        text: { primary: '#f1f5f9', secondary: '#94a3b8' },
        background: { default: '#0f172a', paper: '#1e293b' },
        divider: '#334155',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { textTransform: 'none', fontWeight: 600, borderRadius: 8 },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: 'none', backgroundColor: '#1e293b' },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: { background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
                    },
                },
            },
        },
    },
});