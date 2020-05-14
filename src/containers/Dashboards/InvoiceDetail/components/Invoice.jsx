import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { Button, Grid } from '@material-ui/core';
import Moment from 'react-moment';
import { get, has } from 'lodash';

const invoiceDataItems = [
  { title: 'Item 1', hoursStayed: 1, costPerHour: 27 },
  { title: 'Item 2', hoursStayed: 1, costPerHour: 59 },
  { title: 'Item 3', hoursStayed: 2, costPerHour: 20 }
];

class Invoice extends React.Component {
  render() {
    const { invoiceData } = this.props;
    return (
      <Card>
        <CardBody className="invoice">
          <div className="invoice__head">
            <div className="invoice__head-left">
              <h3>Invoice #{invoiceData.data.invoice_number}</h3>
              <p className="invoice__date">
                <Moment format={'ll'} unix>
                  {invoiceData.created_at}
                </Moment>
              </p>
              <p>{get(invoiceData, 'data.customer.name')}</p>
              <p>{get(invoiceData, 'data.customer.email')}</p>
              <p>{get(invoiceData, 'data.customer.address.address1', '-')}</p>
              <p>{get(invoiceData, 'data.customer.address.address2', '-')}</p>

              <p>{get(invoiceData, 'data.customer.address.city', '-')}</p>
              <p>
                {get(invoiceData, 'data.customer.address.state')},{' '}
                {get(
                  invoiceData,
                  'data.customer.address.country',
                  '-'
                ).toUpperCase()}{' '}
                {get(invoiceData, 'data.customer.address.zip', '-')}
              </p>
            </div>
            <div className="invoice__head-right">
              <Grid container justify={'flex-end'}>
                <div className="invoice__logo" />
              </Grid>
              <p>Adani Ports & Special Economic Zone Ltd.</p>
              <p>Mithakhali Six Roads, Navarangpura</p>
              <p>Ahmedabad, Gujarat</p>
              <p>IN 380 009</p>
              <p dir="ltr">+91 79 2656 5555</p>
            </div>
          </div>
          <Table className="table--bordered" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Berth</th>
                <th>Cost Per Hour</th>
                <th>Hours Stayed</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.data.items.map((i, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.description}</td>
                  <td>₹{i.amount / 100}</td>
                  <td>{i.quantity}</td>
                  <td>₹{(i.amount * i.quantity) / 100}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="invoice__total">
            <p className="invoice__grand-total">
              Grand Total: ₹{invoiceData.data.amount / 100}
            </p>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Invoice;
