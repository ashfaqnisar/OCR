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
import get from 'lodash.get';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ createNewUser }) => {
  const registrationValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Password Too Short')
      .max(20, 'Password Too Long')
  });
  const [passwordView, setPasswordView] = useState(false);

  function togglePassword() {
    setPasswordView(!passwordView);
  }

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: registrationValidationSchema
  });

  return (
    <form onSubmit={handleSubmit(createNewUser)}>
      <Grid container direction={'column'} spacing={2} alignItems="flex-start">
        <Grid item container spacing={2}>
          <Grid item xs={12} lg={6} xl={6}>
            <TextField
              name={'firstName'}
              helperText={get(errors, 'firstName.message')}
              error={get(errors, 'firstName')}
              variant={'outlined'}
              label={'First Name'}
              type={'name'}
              size={'small'}
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <TextField
              id={'lastName'}
              name={'lastName'}
              helperText={get(errors, 'lastName.message')}
              error={get(errors, 'lastName')}
              variant={'outlined'}
              label={'Last Name'}
              type={'name'}
              size={'small'}
              inputRef={register}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item container>
          <TextField
            id={'email'}
            name={'email'}
            helperText={get(errors, 'email.message')}
            error={get(errors, 'email')}
            variant={'outlined'}
            label={'Email'}
            inputRef={register}
            type={'email'}
            size={'small'}
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
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
