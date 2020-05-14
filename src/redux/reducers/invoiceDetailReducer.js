import {
  INVOICE_DETAIL_FETCH_REQUEST,
  INVOICE_DETAIL_FETCH_SUCCESS,
  INVOICE_DETAIL_FETCH_ERROR
} from '../actions/invoiceDetailActions';

export const initialState = {
  state: 'initial',
  invoiceDetailData: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INVOICE_DETAIL_FETCH_REQUEST:
      return { ...state, state: 'loading' };
    case INVOICE_DETAIL_FETCH_SUCCESS:
      return { ...state, state: 'loaded', invoiceDetailData: action.payload };
    case INVOICE_DETAIL_FETCH_ERROR:
      return { ...state, state: 'error', error: action.payload };
    default:
      break;
  }
  return state;
}
