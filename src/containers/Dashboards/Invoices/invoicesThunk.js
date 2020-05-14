import {
  invoicesFetchError,
  invoicesFetchRequest,
  invoicesFetchSuccess
} from '../../../redux/actions/invoicesAction';

import axios from '../../../config/axios';

export const getInvoices = custId => async dispatch => {
  dispatch(invoicesFetchRequest());
  axios({
    method: 'get',
    url: '/invoices',
    params: { custId: custId }
  })
    .then(response => {
      dispatch(invoicesFetchSuccess(response.data));
    })
    .catch(err => {
      dispatch(invoicesFetchError(err));
    });
};
