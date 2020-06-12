import React, { useState } from 'react';
import { LogoLoading } from '../../../shared/components/LogoLoading';
import logo from '../../../images/eslogo.svg';
import LogInForm from './components/LoginForm';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const firebase = useFirebase();

  const signInWithGoogle = (email, password) => {
    setLoading(true);
    firebase
      .login({
        email: email,
        password: password
      })
      .then(() => {
        setLoading(false);
        history.push('/home');
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  };

  const onSubmitFireBase = ({ email, password }) => {
    event.preventDefault();
    signInWithGoogle(email, password);
  };

  return loading ? (
    <LogoLoading />
  ) : (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <div className="account__title text-center">
              <img
                style={{ align: 'center', width: '50%' }}
                src={logo}
                alt="Logo"
              />
              <span className="account__logo" />
            </div>
          </div>
          <LogInForm
            onSubmit={onSubmitFireBase}
            errorMessage={error}
            form="log_in_form"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
