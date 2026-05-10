import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { FiberNew, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";

function ClienteList() {
  const navigate = useNavigate();

  const clientes = [
    {
      id: 1,
      nome: 'Carlos Eduardo',
      cpf: '111.222.333-44',
      telefone: '(11) 99999-1111',
      email: 'carlos@email.com',
      endereco: 'Rua das Flores, 123',
    },
    {
      id: 2,
      nome: 'Ana Paula',
      cpf: '555.666.777-88',
      telefone: '(11) 88888-2222',
      email: 'ana@email.com',
      endereco: 'Av. Principal, 456',
    },
    {
      id: 3,
      nome: 'Roberto Silva',
      cpf: '999.000.111-22',
      telefone: '(11) 77777-3333',
      email: 'roberto@email.com',
      endereco: 'Rua do Comércio, 789',
    },
  ];

  const actions = (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/cliente')}
      startIcon={<FiberNew />}
      sx={{ fontWeight: 600, px: 2, py: 1 }}
    >
      Novo
    </Button>
  );

  const handleView = (cliente) => console.log('Visualizar cliente:', cliente);
  const handleEdit = (cliente) => navigate(`/cliente/${cliente.id}`);
  const handleDelete = (cliente) => console.log('Excluir cliente:', cliente);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'nome', headerName: 'Nome' },
    { field: 'cpf', headerName: 'CPF' },
    { field: 'telefone', headerName: 'Telefone' },
    { field: 'email', headerName: 'Email' },
    { field: 'endereco', headerName: 'Endereço' },
    { field: 'actions', headerName: 'Ações' },
  ];

  const renderDesktopRow = (cliente) => (
    <TableRow key={cliente.id} hover>
      <TableCell>{cliente.id}</TableCell>
      <TableCell sx={{ fontWeight: 500 }}>{cliente.nome}</TableCell>
      <TableCell>{cliente.cpf}</TableCell>
      <TableCell>{cliente.telefone}</TableCell>
      <TableCell>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {cliente.email}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {cliente.endereco}
        </Typography>
      </TableCell>
      <TableCell>
        <ActionButtons onView={handleView} onEdit={handleEdit} onDelete={handleDelete} item={cliente} />
      </TableCell>
    </TableRow>
  );

  const renderMobileCard = (cliente) => (
    <Card key={cliente.id} sx={{ mb: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
              {cliente.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {cliente.id} • CPF: {cliente.cpf}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Telefone:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {cliente.telefone}
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Email:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {cliente.email}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Endereço:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {cliente.endereco}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ActionButtons item={cliente} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <PageLayout title="Clientes" actions={actions} icon={<Person sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }} />}>
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
              {clientes.map((cliente) => renderDesktopRow(cliente))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {clientes.map((cliente) => renderMobileCard(cliente))}
      </Box>
    </PageLayout>
  );
}

export default ClienteList;