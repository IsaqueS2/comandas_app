import { createContext, useContext, useState } from 'react';

const FuncionariosContext = createContext();

export const useFuncionarios = () => {
  const context = useContext(FuncionariosContext);
  if (!context) {
    throw new Error('useFuncionarios must be used within a FuncionariosProvider');
  }
  return context;
};

export const FuncionariosProvider = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState([
    {
      id: 1,
      nome: 'João Silva',
      cpf: '123.456.789-00',
      cargo: 'Garçom',
      telefone: '(11) 99999-9999',
      email: 'joao@email.com',
    },
    {
      id: 2,
      nome: 'Maria Santos',
      cpf: '987.654.321-00',
      cargo: 'Cozinheira',
      telefone: '(11) 88888-8888',
      email: 'maria@email.com',
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      cpf: '456.789.123-00',
      cargo: 'Caixa',
      telefone: '(11) 77777-7777',
      email: 'pedro@email.com',
    },
  ]);

  const addFuncionario = (funcionario) => {
    const newId = Math.max(...funcionarios.map(f => f.id)) + 1;
    setFuncionarios([...funcionarios, { ...funcionario, id: newId }]);
  };

  const updateFuncionario = (id, updatedFuncionario) => {
    setFuncionarios(funcionarios.map(f => f.id === id ? { ...f, ...updatedFuncionario } : f));
  };

  const deleteFuncionario = (id) => {
    setFuncionarios(funcionarios.filter(f => f.id !== id));
  };

  return (
    <FuncionariosContext.Provider value={{ funcionarios, addFuncionario, updateFuncionario, deleteFuncionario }}>
      {children}
    </FuncionariosContext.Provider>
  );
};