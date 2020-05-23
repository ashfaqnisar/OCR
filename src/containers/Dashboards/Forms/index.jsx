import { Col, Container, Row, Button } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ApplicationForms = () => {
  const { uid } = useSelector(state => state.user.data);
  const uploadDocument = () => {};
  const fetchPreviousDocument = () => {};
  useEffect(() => {
    dispatch(fetchPreviousDocument());
  }, []);
  return (
    <div>
      <Container className="dashboard">
        <Row>
          <Col sm={6} md={8} lg={10} xl={10}>
            <h3 className="page-title">Application Forms</h3>
          </Col>
          <Col sm={6} md={4} lg={2} xl={2}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
              onClick={uploadDocument}
            >
              New Exam
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApplicationForms;
