import React from 'react';
import LogInForm from './LogInForm';
import logo from '../../../../images/eslogo.svg';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../shared/components/Loading';
import { loginUser } from '../loginThunk';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const LoginCard = () => {
  const dispatch = useDispatch();
  const { state, error } = useSelector(state => state.user);

  const history = useHistory();
  const firebase = useFirebase();
  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup'
      })
      .then(() => history.push('/home'));
  };

  const onSubmitFireBase = ({ email, password }) => {
    event.preventDefault();
    signInWithGoogle();
    // dispatch(loginUser(email, password));
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
