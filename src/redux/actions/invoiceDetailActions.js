export const INVOICE_DETAIL_FETCH_REQUEST = 'INVOICE_DETAIL_FETCH_REQUEST';
export const INVOICE_DETAIL_FETCH_SUCCESS = 'INVOICE_DETAIL_FETCH_SUCCESS';
export const INVOICE_DETAIL_FETCH_ERROR = 'INVOICE_DETAIL_FETCH_ERROR';

export const invoiceDetailFetchRequest = () => {
  return {
    type: INVOICE_DETAIL_FETCH_REQUEST
  };
};

export const invoiceDetailFetchSuccess = response => {
  return {
    type: INVOICE_DETAIL_FETCH_SUCCESS,
    payload: response
  };
};

export const invoiceDetailFetchError = error => {
  return {
    type: INVOICE_DETAIL_FETCH_ERROR,
    payload: error
  };
};
