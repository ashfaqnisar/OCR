import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT
} from '../actions/loginActions';

const initialState = {
  state: 'initial',
  data: {},
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_LOADING:
      return { ...state, state: 'loading' };
    case LOGIN_USER_SUCCESS:
      return { ...state, state: 'loaded', data: action.payload, error: null };
    case LOGIN_USER_ERROR:
      return { ...state, state: 'error', error: action.error };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
