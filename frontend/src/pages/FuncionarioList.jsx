import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { FiberNew, People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";

function FuncionarioList() {
  const navigate = useNavigate();

  const funcionarios = [
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
  ];

  const actions = (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/funcionario')}
      startIcon={<FiberNew />}
      sx={{ fontWeight: 600, px: 2, py: 1 }}
    >
      Novo
    </Button>
  );

  const handleView = (funcionario) => console.log('Visualizar funcionário:', funcionario);
  const handleEdit = (funcionario) => navigate(`/funcionario/${funcionario.id}`);
  const handleDelete = (funcionario) => console.log('Excluir funcionário:', funcionario);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'nome', headerName: 'Nome' },
    { field: 'cpf', headerName: 'CPF' },
    { field: 'cargo', headerName: 'Cargo' },
    { field: 'telefone', headerName: 'Telefone' },
    { field: 'email', headerName: 'Email' },
    { field: 'actions', headerName: 'Ações' },
  ];

  const renderDesktopRow = (funcionario) => (
    <TableRow key={funcionario.id} hover>
      <TableCell>{funcionario.id}</TableCell>
      <TableCell sx={{ fontWeight: 500 }}>{funcionario.nome}</TableCell>
      <TableCell>{funcionario.cpf}</TableCell>
      <TableCell>{funcionario.cargo}</TableCell>
      <TableCell>{funcionario.telefone}</TableCell>
      <TableCell>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {funcionario.email}
        </Typography>
      </TableCell>
      <TableCell>
        <ActionButtons onView={handleView} onEdit={handleEdit} onDelete={handleDelete} item={funcionario} />
      </TableCell>
    </TableRow>
  );

  const renderMobileCard = (funcionario) => (
    <Card key={funcionario.id} sx={{ mb: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
              {funcionario.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {funcionario.id} • CPF: {funcionario.cpf}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Cargo:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {funcionario.cargo}
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Telefone:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {funcionario.telefone}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Email:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {funcionario.email}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ActionButtons item={funcionario} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <PageLayout title="Funcionários" actions={actions} icon={<People sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }} />}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} sx={{ fontWeight: 600 }}>
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios.map((funcionario) => renderDesktopRow(funcionario))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {funcionarios.map((funcionario) => renderMobileCard(funcionario))}
      </Box>
    </PageLayout>
  );
}

export default FuncionarioList;