import axios from '../../../config/axios';
import firebase from '../../../config/firebase';
import {
  loginUserLoading,
  loginUserError,
  loginUserSuccess
} from '../../../redux/actions/loginActions';
import { history } from '../../../redux/store';

export const loginUser = (email, password) => async dispatch => {
  dispatch(loginUserLoading());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async res => {
      axios({
        method: 'get',
        url: `/users/${res.user.uid}`
      })
        .then(customer => {
          const user = {
            name: customer.data.name,
            email: customer.data.email,
            custId: customer.data.custId,
            uid: customer.data.uid
          };
          dispatch(loginUserSuccess(user));
          history.push('/home');
        })
        .catch(err => {
          console.error(err.message);
          dispatch(loginUserError(err.message));
        });
    })
    .catch(error => {
      console.error(error.message);
      dispatch(loginUserError(error.message));
    });
};
