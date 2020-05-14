import React from 'react';
import { Col, Container, Row } from 'reactstrap';

class PaymentDues extends React.Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Payment Dues</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default PaymentDues;
