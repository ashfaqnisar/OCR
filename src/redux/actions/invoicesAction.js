export const INVOICES_FETCH_REQUEST = 'INVOICES_FETCH_REQUEST';
export const INVOICES_FETCH_SUCCESS = 'INVOICES_FETCH_SUCCESS';
export const INVOICES_FETCH_ERROR = 'INVOICES_FETCH_ERROR';

export const invoicesFetchRequest = () => {
  return {
    type: INVOICES_FETCH_REQUEST
  };
};

export const invoicesFetchSuccess = response => {
  return {
    type: INVOICES_FETCH_SUCCESS,
    payload: response
  };
};

export const invoicesFetchError = error => {
  return {
    type: INVOICES_FETCH_ERROR,
    payload: error
  };
};
