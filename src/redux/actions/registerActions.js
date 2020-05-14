export const REGISTER_USER_LOADING = 'REGISTER_USER_LOADING';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const registerUserSuccess = response => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: response
  };
};

export const registerUserLoading = () => {
  return {
    type: REGISTER_USER_LOADING
  };
};

export function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error: error
  };
}
