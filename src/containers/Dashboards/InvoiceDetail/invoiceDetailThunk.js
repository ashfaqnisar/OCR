import axios from '../../../config/axios';
import {
  invoiceDetailFetchError,
  invoiceDetailFetchRequest,
  invoiceDetailFetchSuccess
} from '../../../redux/actions/invoiceDetailActions';

export const getInvoiceDetail = invoiceId => async dispatch => {
  dispatch(invoiceDetailFetchRequest());
  axios({
    method: 'get',
    url: `/invoices/${invoiceId}`
  })
    .then(response => {
      dispatch(invoiceDetailFetchSuccess(response.data));
    })
    .catch(err => {
      dispatch(invoiceDetailFetchError(err));
    });
};
