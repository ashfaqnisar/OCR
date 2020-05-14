import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MUIDataTable from 'mui-datatables';
import Moment from 'react-moment';
import { history } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../shared/components/Loading';
import { getInvoices } from './invoicesThunk';
import { handleUndefined } from '../../../shared/components/Beautifier';

const beautifyInvoice = invoice => {
  return [
    handleUndefined(invoice.created_at, '-'),
    handleUndefined(invoice.invoice_number, '-'),
    handleUndefined(invoice.status, '-'),
    handleUndefined(invoice.expire_by, '-'),
    handleUndefined(invoice.amount, '-'),
    handleUndefined(invoice.amount_paid, '-'),
    handleUndefined(invoice.amount_due)
  ];
};

const Invoices = () => {
  const { state, invoicesData, error } = useSelector(state => state.invoices);
  const { custId } = useSelector(state => state.user.data);
  const handleRowClick = async (rowData, rowMeta) => {
    history.push(`/invoices/${invoicesData[rowMeta.dataIndex].data.invoiceId}`);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices(custId));
  }, []);

  const tableOptions = {
    filterType: 'dropdown',
    selectableRows: 'none',
    rowsPerPage: 15,
    print: false,
    rowsPerPageOptions: [15, 20, 30],
    download: false,
    viewColumns: false,
    onRowClick: handleRowClick
  };

  const columns = [
    {
      name: 'createdAt',
      label: 'Date',
      options: {
        filter: false,
        customBodyRender: value => {
          return (
            <p>
              <Moment format={'DD/MM/YYYY'} unix>
                {value}
              </Moment>
            </p>
          );
        }
      }
    },
    {
      name: 'invoive_number',
      label: 'Invoice Number',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p>{value}</p>;
        }
      }
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p style={{ textTransform: 'capitalize' }}>{value}</p>;
        }
      }
    },
    {
      name: 'dueDate',
      label: 'Due Date',
      options: {
        filter: false,
        customBodyRender: value => {
          return (
            <p>
              <Moment format={'DD/MM/YYYY'} unix>
                {value}
              </Moment>
            </p>
          );
        }
      }
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p>₹{value / 100}</p>;
        }
      }
    },
    {
      name: 'amount_paid',
      label: 'Amount Paid',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p>₹{value / 100}</p>;
        }
      }
    },
    {
      name: 'amount_due',
      label: 'Amount Due',
      options: {
        filter: false,
        customBodyRender: value => {
          return <p>₹{value / 100}</p>;
        }
      }
    }
  ];

  return (
    <Container className="dashboard">
      {['initial', 'loading'].includes(state) ? (
        <Loading loading={['initial', 'loading'].includes(state)} />
      ) : state === 'error' ? (
        <>Error: {error.message}</>
      ) : (
        <div>
          <Row>
            <Col md={12}>
              <MUIDataTable
                title={'Invoices'}
                options={tableOptions}
                columns={columns}
                data={invoicesData.map(invoice => {
                  return beautifyInvoice(invoice.data);
                })}
              />
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};
export default Invoices;
