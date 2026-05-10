export const useValidationRules = () => ({
    nome: { required: 'Nome é obrigatório' },
    cpf: { required: 'CPF é obrigatório' },
    telefone: { required: 'Telefone é obrigatório' },
    matricula: { required: 'Matrícula é obrigatória' },
    senha: {
        required: 'Senha é obrigatória',
        minLength: { value: 6, message: 'Senha deve ter pelo menos 6 caracteres' }
    },
    grupo: { required: 'Grupo é obrigatório' },
    descricao: { required: 'Descrição é obrigatória' },
    valor_unitario: {
        required: 'Valor unitário é obrigatório',
        min: { value: 0, message: 'Valor deve ser maior que 0' }
    },
    email: {
        required: 'Email é obrigatório',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
        }
    },
    endereco: { required: 'Endereço é obrigatório' },
    cargo: { required: 'Cargo é obrigatório' },
});
export default useValidationRules;