import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import RegisterForm from './components/RegisterForm';
import logo from '../../../images/eslogo.svg';
import { LogoLoading } from '../../../shared/components/LogoLoading';
import { useFirebase } from 'react-redux-firebase';

const Register = () => {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();
  const createNewUser = ({ email, password, name }) => {
    setLoading(true);
    firebase
      .createUser({ email, password }, { name, email })
      .then(() => {
        setLoading(false);
        history.push('/home');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };
  const onSubmitRegisterUser = user => {
    event.preventDefault();
    createNewUser(user);
  };

  return loading ? (
    <LogoLoading />
  ) : (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <div className="account__title text-center">
              <span className="account__logo">
                <img
                  style={{ align: 'center', width: '50%' }}
                  src={logo}
                  alt="Logo"
                />
              </span>
            </div>
          </div>
          <h3 className="account__subhead subheading text-center">
            Create an Account
          </h3>
          <RegisterForm onSubmit={onSubmitRegisterUser} errorMessage={error} />
          <div className="account__have-account">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
