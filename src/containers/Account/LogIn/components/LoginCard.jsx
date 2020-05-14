import React, { useState } from 'react';
import LogInForm from './LogInForm';
import logo from '../../../../images/eslogo.svg';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../shared/components/Loading';
import { loginUser } from '../loginThunk';

const LoginCard = () => {
  const dispatch = useDispatch();
  const { state, error } = useSelector(state => state.user);

  const onSubmitFireBase = ({ email, password }) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
  };

  return ['loading'].includes(state) ? (
    <Loading loading={['initial', 'loading'].includes(state)} />
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
