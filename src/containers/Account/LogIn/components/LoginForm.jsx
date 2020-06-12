import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Formik } from 'formik';

const LoginForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
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
