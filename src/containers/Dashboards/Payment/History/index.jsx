import { Col, Container, Row } from 'reactstrap';
import React from 'react';

class PaymentHistory extends React.Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Payment History</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default PaymentHistory;
