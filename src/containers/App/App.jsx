import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import { Router } from './Router/index';
import Loading from '../../shared/components/Loading';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../redux/store';
import { useState } from 'react';
import { SWRConfig } from 'swr';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
      setTimeout(() => setLoaded(true), 300);
    });
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          {!loaded && <Loading loading={loading} />}
          <div>
            <SWRConfig value={{ refreshInterval: 5000 }}>
              <Router />
            </SWRConfig>
          </div>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
