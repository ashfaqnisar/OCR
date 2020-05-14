import { Col, Container, Row } from 'reactstrap';
import React, { Component } from 'react';
import CurrentOutstanding from './components/CurrentOutstanding';

class HomeDashboard extends Component {
  render() {
    return (
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Home Pages</h3>
            </Col>
          </Row>
          <Row>
            <CurrentOutstanding />
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeDashboard;
