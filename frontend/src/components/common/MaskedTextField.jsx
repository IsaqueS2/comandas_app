import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';

const MaskedTextField = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask} {...props}>
      {(inputProps) => (
        <TextField {...inputProps} />
      )}
    </InputMask>
  );
};

export default MaskedTextField;
