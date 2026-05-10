import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
    const { isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Bem-vindo ao Sistema de Comandas!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Você está logado com sucesso.
            </Typography>
            <Button variant="contained" onClick={logout}>
                Sair
            </Button>
        </Box>
    );
};

export default Home;