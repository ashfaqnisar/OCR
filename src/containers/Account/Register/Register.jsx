import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import RegisterForm from '../../../shared/components/login/RegisterForm';
import logo from '../../../images/eslogo.svg';
import Loading from '../../../shared/components/Loading';
import { registerUser } from './registerThunk';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmitRegisterUser = user => {
    event.preventDefault();
    dispatch(registerUser(user));
  };

  const { error, state } = useSelector(state => state.register);
  return ['loading'].includes(state) ? (
    <Loading loading={['initial', 'loading'].includes(state)} />
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
