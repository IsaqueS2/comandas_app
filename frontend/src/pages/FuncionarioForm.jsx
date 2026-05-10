import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, InputLabel, MenuItem, Select, FormControl, Typography } from '@mui/material';
import { PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import PageLayout from "../components/common/PageLayout";
import { useValidationRules } from '../hooks/useValidationRules';
import { useSnackbar } from '../context/useSnackbar';

const FuncionarioForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const validationRules = useValidationRules();
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    console.log('Dados do funcionário:', data);
    showSnackbar('Funcionário cadastrado com sucesso!', 'success');
    setTimeout(() => {
      navigate('/funcionarios');
    }, 1500);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Arquivo selecionado:', file);
    }
  };

  const handleCancel = () => {
    navigate('/funcionarios');
  };

  const cargos = [
    'Garçom',
    'Cozinheiro',
    'Caixa',
    'Gerente',
    'Auxiliar de Cozinha',
    'Atendente',
  ];

  return (
    <PageLayout title="Dados Funcionário">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={validationRules.nome}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome Completo"
              fullWidth
              margin="normal"
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />
          )}
        />

        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          rules={validationRules.cpf}
          render={({ field }) => (
            <InputMask mask="999.999.999-99" {...field} alwaysShowMask={false}>
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="CPF"
                  fullWidth
                  margin="normal"
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                />
              )}
            </InputMask>
          )}
        />

        <Controller
          name="cargo"
          control={control}
          defaultValue=""
          rules={validationRules.cargo}
          render={({ field }) => (
            <FormControl fullWidth margin="normal" error={!!errors.cargo}>
              <InputLabel>Cargo</InputLabel>
              <Select {...field} label="Cargo">
                {cargos.map((cargo) => (
                  <MenuItem key={cargo} value={cargo}>
                    {cargo}
                  </MenuItem>
                ))}
              </Select>
              {errors.cargo && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.75 }}>
                  {errors.cargo.message}
                </Typography>
              )}
            </FormControl>
          )}
        />

        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={validationRules.telefone}
          render={({ field }) => (
            <InputMask mask="(99) 99999-9999" {...field} alwaysShowMask={false}>
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="Telefone"
                  fullWidth
                  margin="normal"
                  error={!!errors.telefone}
                  helperText={errors.telefone?.message}
                />
              )}
            </InputMask>
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Box sx={{ mt: 2, mb: 2 }}>
          <InputLabel htmlFor="foto-upload" sx={{ mb: 1 }}>
            Foto do Funcionário
          </InputLabel>
          <input
            id="foto-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="foto-upload">
            <Button variant="outlined" component="span" startIcon={<PhotoCameraIcon />} fullWidth>
              Selecionar Foto
            </Button>
          </label>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button sx={{ mr: 1 }} onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default FuncionarioForm;