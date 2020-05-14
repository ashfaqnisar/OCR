import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PaymentCard from './components/PaymentCard';

const Payment = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Payment</h3>
        <h3 className="page-subhead subhead">
          Please select your preferred payment gateway for the payment
        </h3>
      </Col>
    </Row>
    <Row>
      <PaymentCard />
    </Row>
  </Container>
);

export default Payment;
