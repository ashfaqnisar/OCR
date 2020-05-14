import axios from '../../../config/axios';
import firebase from '../../../config/firebase';
import { history } from '../../../redux/store';
import {
  registerUserLoading,
  registerUserSuccess,
  registerUserError
} from '../../../redux/actions/registerActions';

export const registerUser = userData => async dispatch => {
  dispatch(registerUserLoading());
  firebase
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(userResponse => {
      delete userData.password;
      axios({
        method: 'post',
        url: '/customers',
        data: { ...userData, uid: userResponse.user.uid }
      })
        .then(() => {
          dispatch(registerUserSuccess());
          history.push('/home');
        })
        .catch(err => {
          dispatch(registerUserError(err.message));
        });
    })
    .catch(err => {
      dispatch(registerUserError(err.message));
    });
};
