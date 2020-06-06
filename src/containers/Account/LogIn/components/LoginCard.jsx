import React, { useState } from 'react';
import LogInForm from './LogInForm';
import logo from '../../../../images/eslogo.svg';
import Loading from '../../../../shared/components/Loading';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const LoginCard = () => {
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
        history.push('/home');
        setLoading(false);
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
    <Loading loading={loading} />
  ) : (
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
  );
};

export default LoginCard;
