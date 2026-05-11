import { createContext, useContext, useState } from 'react';

const ClientesContext = createContext();

export const useClientes = () => {
  const context = useContext(ClientesContext);
  if (!context) {
    throw new Error('useClientes must be used within a ClientesProvider');
  }
  return context;
};

export const ClientesProvider = ({ children }) => {
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome: 'Ana Costa',
      cpf: '111.222.333-44',
      telefone: '(11) 55555-5555',
      email: 'ana@email.com',
      endereco: 'Rua das Flores, 123, São Paulo, SP',
    },
    {
      id: 2,
      nome: 'Carlos Pereira',
      cpf: '555.666.777-88',
      telefone: '(11) 44444-4444',
      email: 'carlos@email.com',
      endereco: 'Av. Paulista, 456, São Paulo, SP',
    },
  ]);

  const addCliente = (cliente) => {
    const newId = Math.max(...clientes.map(c => c.id)) + 1;
    setClientes([...clientes, { ...cliente, id: newId }]);
  };

  const updateCliente = (id, updatedCliente) => {
    setClientes(clientes.map(c => c.id === id ? { ...c, ...updatedCliente } : c));
  };

  const deleteCliente = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
  };

  return (
    <ClientesContext.Provider value={{ clientes, addCliente, updateCliente, deleteCliente }}>
      {children}
    </ClientesContext.Provider>
  );
};