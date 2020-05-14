export const AUTHENTICATE_ERROR_AUTH = 'AUTHENTICATE_ERROR_AUTH';

export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginUserSuccess = response => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response
  };
};

export const loginUserLoading = () => {
  return {
    type: LOGIN_USER_LOADING
  };
};

export function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error: error
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error
  };
}

export const signOutUser = () => {
  return {
    type: LOGOUT
  };
};
