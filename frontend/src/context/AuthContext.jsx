import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth-context";

// Provedor do contexto
export const AuthProvider = ({ children }) => {
    // Inicializa o estado com base no valor do sessionStorage
    // sessionStorage é um armazenamento temporário que persiste enquanto a aba estiver aberta
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("loginRealizado") === "true";
    });
    // Estado para controlar o loading
    const [loading, setLoading] = useState(false);
    // useNavigate é um hook do React Router que permite programaticamente navegar entre rotas
    const navigate = useNavigate();
    // Função para login
    // ainda com dados fixos, posteriormente será implementado chamada à API
    const login = (cpf, senha) => {
        setLoading(true);
        // Simula uma chamada assíncrona
        setTimeout(() => {
            if (cpf === "isaque" && senha === "isaque456") {
                setIsAuthenticated(true);
                sessionStorage.setItem("loginRealizado", "true");
                navigate("/home");
            } else {
                alert("Usuário ou senha inválidos!");
            }
            setLoading(false);
        }, 1000);
    };
    // Função para logout
    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("loginRealizado");
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Re-exportar o hook useAuth do arquivo auth-context.js
export { useAuth } from "./auth-context";