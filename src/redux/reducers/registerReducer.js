import {
  REGISTER_USER_LOADING,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS
} from '../actions/registerActions';

const initialState = {
  state: 'initial',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_LOADING:
      return { ...state, state: 'loading' };
    case REGISTER_USER_SUCCESS:
      return { ...state, state: 'loaded', error: null };
    case REGISTER_USER_ERROR:
      return { ...state, state: 'error', error: action.error };
    default:
      return state;
  }
}
