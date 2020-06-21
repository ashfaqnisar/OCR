import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import get from 'lodash.get';

import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const LoginForm = ({ handleUserLogin }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(5, 'Password Too Short')
      .max(20, 'Password Too Long')
  });
  const [passwordView, setPasswordView] = useState(false);

  function togglePassword() {
    setPasswordView(!passwordView);
  }

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: loginValidationSchema
  });

  return (
    <form onSubmit={handleSubmit(handleUserLogin)}>
      <Grid container direction={'column'} spacing={2} alignItems="flex-start">
        <Grid item container>
          <TextField
            id={'email'}
            name={'email'}
            helperText={get(errors, 'email.message')}
            error={get(errors, 'email')}
            variant={'outlined'}
            label={'Email'}
            type={'email'}
            size={'small'}
            inputRef={register}
            fullWidth
          />
        </Grid>
        <Grid item container>
          <FormControl variant="outlined" fullWidth size={'small'}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name={'password'}
              variant={'outlined'}
              error={get(errors, 'password')}
              label={'Password'}
              type={passwordView ? 'text' : 'password'}
              inputRef={register}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                    edge="end"
                  >
                    {passwordView ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={get(errors, 'password')}>
              {get(errors, 'password.message')}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant={'contained'} color={'primary'} type={'submit'}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
