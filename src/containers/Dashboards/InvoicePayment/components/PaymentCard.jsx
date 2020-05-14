import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import StripePaymentForm from './StripePaymentForm';
import { StripeProvider, Elements } from 'react-stripe-elements';
import RazorpayPaymentForm from '../components/RazorpayPaymentForm';

const PaymentCard = () => {
  return (
    <>
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Payment</h5>
            </div>
            <RazorpayPaymentForm />
            {/*<div className="payment">*/}
            {/*  <StripeProvider*/}
            {/*    apiKey={'pk_test_ED53qZ8D0iwhQ9cXQ6JBxb68000aUl34vY'}*/}
            {/*  >*/}
            {/*    <Elements>*/}
            {/*      <StripePaymentForm />*/}
            {/*    </Elements>*/}
            {/*  </StripeProvider>*/}
            {/*</div>*/}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default PaymentCard;
