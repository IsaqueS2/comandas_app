import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, InputLabel } from '@mui/material';
import { PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import PageLayout from "../components/common/PageLayout";
import { useValidationRules } from '../hooks/useValidationRules';
import { useSnackbar } from '../context/useSnackbar';
import { useClientes } from '../context/ClientesContext';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const TextMaskCustomTelefone = React.forwardRef(function TextMaskCustomTelefone(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const ClienteForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const validationRules = useValidationRules();
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const { addCliente } = useClientes();

  const onSubmit = (data) => {
    addCliente(data);
    showSnackbar('Cliente cadastrado com sucesso!', 'success');
    setTimeout(() => {
      navigate('/clientes');
    }, 1500);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Arquivo selecionado:', file);
    }
  };

  const handleCancel = () => {
    navigate('/clientes');
  };

  return (
    <PageLayout title="Dados Cliente">
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
            <TextField
              {...field}
              label="CPF"
              fullWidth
              margin="normal"
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              InputProps={{
                inputComponent: TextMaskCustom,
              }}
            />
          )}
        />

        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={validationRules.telefone}
          render={({ field }) => (
            <TextField
              {...field}
              label="Telefone"
              fullWidth
              margin="normal"
              error={!!errors.telefone}
              helperText={errors.telefone?.message}
              InputProps={{
                inputComponent: TextMaskCustomTelefone,
              }}
            />
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

        <Controller
          name="endereco"
          control={control}
          defaultValue=""
          rules={validationRules.endereco}
          render={({ field }) => (
            <TextField
              {...field}
              label="Endereço Completo"
              fullWidth
              margin="normal"
              multiline
              rows={2}
              error={!!errors.endereco}
              helperText={errors.endereco?.message}
            />
          )}
        />

        <Box sx={{ mt: 2, mb: 2 }}>
          <InputLabel htmlFor="foto-upload" sx={{ mb: 1 }}>
            Foto do Cliente
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

export default ClienteForm;

//ISAQUE DE OLIVEIRA DOS SANTOS