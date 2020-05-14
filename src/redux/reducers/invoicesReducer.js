import {
  INVOICES_FETCH_SUCCESS,
  INVOICES_FETCH_ERROR,
  INVOICES_FETCH_REQUEST
} from '../actions/invoicesAction';

export const initialState = {
  state: 'initial',
  invoicesData: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INVOICES_FETCH_REQUEST:
      return { ...state, state: 'loading' };
    case INVOICES_FETCH_SUCCESS:
      return { ...state, state: 'loaded', invoicesData: action.payload };
    case INVOICES_FETCH_ERROR:
      return { ...state, state: 'error', error: action.payload };
    default:
      break;
  }
  return state;
}
