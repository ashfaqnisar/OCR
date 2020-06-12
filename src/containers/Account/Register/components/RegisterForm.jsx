import React, { useState } from 'react';
import { Button, FormHelperText, Grid, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const RegisterForm = ({ handleSubmit }) => {
  const loginValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Password Too Short')
      .max(20, 'Password Too Long')
      .required('Required')
  });
  const [passwordView, setPasswordView] = useState(false);

  function togglePassword() {
    setPasswordView(!passwordView);
  }

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={values => {
        handleSubmit(values);
      }}
    >
      {props => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction={'column'}
              spacing={2}
              alignItems="flex-start"
            >
              <Grid item container spacing={2}>
                <Grid item xs={12} lg={6} xl={6}>
                  <TextField
                    id={'firstName'}
                    name={'firstName'}
                    helperText={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                    error={errors.firstName && touched.firstName}
                    variant={'outlined'}
                    label={'First Name'}
                    type={'name'}
                    size={'small'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                  <TextField
                    id={'lastName'}
                    name={'lastName'}
                    helperText={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                    error={errors.lastName && touched.lastName}
                    variant={'outlined'}
                    label={'Last Name'}
                    type={'name'}
                    size={'small'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <TextField
                  id={'email'}
                  name={'email'}
                  helperText={errors.email && touched.email && errors.email}
                  error={errors.email && touched.email}
                  variant={'outlined'}
                  label={'Email'}
                  type={'email'}
                  size={'small'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  fullWidth
                />
              </Grid>
              <Grid item container>
                <FormControl variant="outlined" fullWidth size={'small'}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id={'password'}
                    name={'password'}
                    variant={'outlined'}
                    error={errors.password && touched.password}
                    label={'Password'}
                    onBlur={handleBlur}
                    type={passwordView ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange}
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
                  <FormHelperText error={errors.password && touched.password}>
                    {errors.password && touched.password && errors.password}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
