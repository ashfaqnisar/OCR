import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import { Col, Row, Container } from 'reactstrap';

const ApplicationForms = () => {
  const { uid } = useSelector(state => state.user.data);
  const fetcher = url => axios({ method: 'get', url: url });
  const { data: documents, error } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });

  const uploadDocument = () => {
    console.log('Document Uploaded');
  };
  const fetchPreviousDocument = () => {};

  return (
    <Grid container className="dashboard container" direction={'column'}>
      <Grid
        item
        container
        justify={'space-between'}
        alignItems={'center'}
        direction={'row'}
      >
        <Grid item xs={10} sm={10} md={10} lg={11} xl={11}>
          <h3 className="page-title">Application Forms</h3>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={1} xl={1}>
          <Button color="primary" onClick={uploadDocument}>
            New Form
          </Button>
        </Grid>
      </Grid>
      <Grid item container>
        {error ? (
          <>
            <Grid item>
              <p>Error: {error.message}</p>
            </Grid>
          </>
        ) : !documents ? (
          <Grid item>
            <p>Loading</p>
          </Grid>
        ) : (
          <Grid item xl={12}>
            <Container>
              <Row>
                {documents.data.map(doc => (
                  <Col lg={3} key={doc.ocrId}>
                    <div>
                      <p>{doc.input}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Grid>

          /*<Grid
            container
            justify="space-between"
            alignItems={'center'}
            direction="row"
          >
            {documents.data.map(doc => (
              <Grid item xs={6} sm={6} md={4} lg={4} xl={3} key={doc.ocrId}>
                <div>
                  <p>{doc.input}</p>
                </div>
              </Grid>
            ))}
          </Grid>*/
        )}
      </Grid>
    </Grid>

    /*<div>
          <Container className="dashboard">
            <Row>
              <Col sm={6} md={8} lg={10} xl={10}>
                <h3 className="page-title">Application Forms</h3>
              </Col>
              <Col xs={12} sm={6} md={4} lg={2} xl={2}>
                <Button color="primary" onClick={uploadDocument}>
                  New Form
                </Button>
              </Col>
            </Row>
            <Row>
              {error ? (
                <>
                  <Col>
                    <p>Error: {error.message}</p>
                  </Col>
                </>
              ) : !documents ? (
                <>Loading</>
              ) : (
                documents.data.map(doc => (
                  <Col lg={3} key={doc.ocrId}>
                    <div>
                      <p>{doc.input}</p>
                    </div>
                  </Col>
                ))
                /!*<Grid
                  container
                  justify="space-between"
                  alignItems={'center'}
                  direction="row"
                >
                  {documents.data.map(doc => (
                    <Grid item key={doc.ocrId}>
                      <div>
                        <p>{doc.input}</p>
                      </div>
                    </Grid>
                  ))}
                </Grid>*!/
              )}
            </Row>
          </Container>
        </div>*/
  );
};

export default ApplicationForms;
