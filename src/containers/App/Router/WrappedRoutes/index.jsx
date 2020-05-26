import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../../Layout/index';

import HomeDashboard from '../../../Dashboards/Home/index';
import OutstandingDashboard from '../../../Dashboards/Outstanding';
import Issues from '../../../Dashboards/Issues';
import PaymentDues from '../../../Dashboards/Payment/Dues';
import PaymentHistory from '../../../Dashboards/Payment/History';
import Invoices from '../../../Dashboards/Invoices';
import InvoiceDetail from '../../../Dashboards/InvoiceDetail';
import InvoicePayment from '../../../Dashboards/InvoicePayment';
import Wallet from '../../../Dashboards/Wallet';
import ApplicationForms from '../../../Dashboards/Forms';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
        <Route path="/home" component={HomeDashboard} />
        <Route path={'/outstanding'} component={OutstandingDashboard} />
        <Route path="/forms" component={ApplicationForms} />
        <Route path={'/payment/dues'} component={PaymentDues} />
        <Route path={'/payment/history'} component={PaymentHistory} />
        <Route
          path={'/invoices/:invoiceId/payment'}
          component={InvoicePayment}
        />
        <Route path={'/invoices/:invoiceId'} component={InvoiceDetail} />
        <Route path={'/invoices'} component={Invoices} />
        <Route path={'/issues'} component={Issues} />
        <Route path={'/wallet'} component={Wallet} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  </div>
);
