import { createContext, useContext, useState } from 'react';

const ProdutosContext = createContext();

export const useProdutos = () => {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error('useProdutos must be used within a ProdutosProvider');
  }
  return context;
};

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Pizza Margherita',
      descricao: 'Pizza tradicional com molho de tomate, queijo e manjericão',
      valor_unitario: 35.00,
    },
    {
      id: 2,
      nome: 'Refrigerante Coca-Cola',
      descricao: 'Refrigerante de cola 350ml',
      valor_unitario: 5.00,
    },
    {
      id: 3,
      nome: 'Salada Caesar',
      descricao: 'Salada com alface, croutons, parmesão e molho caesar',
      valor_unitario: 18.00,
    },
  ]);

  const addProduto = (produto) => {
    const newId = Math.max(...produtos.map(p => p.id)) + 1;
    setProdutos([...produtos, { ...produto, id: newId }]);
  };

  const updateProduto = (id, updatedProduto) => {
    setProdutos(produtos.map(p => p.id === id ? { ...p, ...updatedProduto } : p));
  };

  const deleteProduto = (id) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  return (
    <ProdutosContext.Provider value={{ produtos, addProduto, updateProduto, deleteProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
};