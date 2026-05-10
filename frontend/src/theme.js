import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#8b5cf6', light: '#a78bfa' }, // Roxo moderno
        secondary: { main: '#f43f5e', light: '#fb7185' }, // Rosa/Vermelho
        success: { main: '#10b981' },
        error: { main: '#ef4444', light: '#f87171' },
        text: { primary: '#f8fafc', secondary: '#cbd5e1' },
        background: { default: '#0f172a', paper: '#1e293b' },
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
                root: { background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        '&.Mui-focused fieldset': { borderColor: '#8b5cf6' },
                    },
                },
            },
        },
    },
});