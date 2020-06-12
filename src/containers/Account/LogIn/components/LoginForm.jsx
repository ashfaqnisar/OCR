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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const LoginForm = ({ handleSubmit }) => {
  const loginValidationSchema = Yup.object().shape({
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
      initialValues={{ email: '', password: '' }}
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
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
