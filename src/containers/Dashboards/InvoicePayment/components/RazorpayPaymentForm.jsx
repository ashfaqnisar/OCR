import React from 'react';
import { Container, Button } from 'reactstrap';
import axios from 'axios';

const RazorpayPaymentForm = () => {
  const options = {
    key: 'rzp_test_uK9telCgOeSCRY',
    currency: 'INR',
    name: 'Invoice IN1000',
    handler: function(response, error) {
      console.log(response);
      alert(response);
    },
    notes: {
      address: 'note value'
    },
    theme: {
      color: '#4359f5'
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios({
      method: 'post',
      url: 'https://b9i2x.sse.codesandbox.io/createOrder',
      data: {
        amount: 5000000,
        currency: 'INR',
        receipt: 'receipt#4',
        payment_capture: 1
      }
    });
    const responseOrderId = { order_id: response.data.id };
    const razorpayInstance = new Razorpay({ ...options, ...responseOrderId });
    razorpayInstance.open();
  };
  return (
    <Container>
      <Button color={'success'} onClick={handleSubmit}>
        Make Payment
      </Button>
    </Container>
  );
};

export default RazorpayPaymentForm;
