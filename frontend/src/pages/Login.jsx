import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return <LoginForm />;
};

export default Login;