import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
                <TextField
                  id={'password'}
                  name={'password'}
                  variant={'outlined'}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  error={errors.password && touched.password}
                  label={'Password'}
                  onBlur={handleBlur}
                  type={'password'}
                  size={'small'}
                  value={values.password}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={'submit'}
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
