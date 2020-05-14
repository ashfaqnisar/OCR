import React, { useEffect, useRef } from 'react';
import { ButtonToolbar, Button, Col, Container, Row } from 'reactstrap';
import Invoice from './components/Invoice';
import ReactToPrint from 'react-to-print';
import { history } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../shared/components/Loading';
import { getInvoiceDetail } from './invoiceDetailThunk';

const InvoiceDetail = props => {
  const { invoiceId } = props.match.params;
  const { state, invoiceDetailData, error } = useSelector(
    state => state.invoiceDetail
  );

  const dispatch = useDispatch();

  const makePayment = () => {
    const options = {
      key: 'rzp_test_uK9telCgOeSCRY',
      currency: 'INR',
      order_id: invoiceDetailData.data.order_id,
      handler: function(response, error) {
        console.log(response);
        alert(response);
      },
      theme: {
        color: '#4359f5'
      }
    };
    const razorpayInstance = new Razorpay({ ...options });
    razorpayInstance.open();
  };

  const componentRef = useRef();

  useEffect(() => {
    dispatch(getInvoiceDetail(invoiceId));
  }, [dispatch]);

  return ['initial', 'loading'].includes(state) ? (
    <Loading loading={['initial', 'loading'].includes(state)} />
  ) : state === 'error' ? (
    <>Error: {error.message}</>
  ) : (
    // <>{console.log('Got the data', invoiceDetailData)}test</>

    <Container className="dashboard">
      <Row>
        <Col md={12} lg={12}>
          <Invoice invoiceData={invoiceDetailData} ref={componentRef} />
        </Col>
      </Row>
      <ButtonToolbar className="invoice__toolbar">
        <ReactToPrint
          trigger={() => (
            <Button color={'primary'} variant={'contained'}>
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Button color={'success'} variant={'contained'} onClick={makePayment}>
          Proceed to payment
        </Button>
      </ButtonToolbar>
    </Container>
  );
};

export default InvoiceDetail;
