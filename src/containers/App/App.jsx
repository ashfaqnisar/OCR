import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import ScrollToTop from './ScrollToTop';
import { config as i18nextConfig } from '../../translations';
import Loading from '../../shared/components/Loading';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../redux/store';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import axios from '../../config/axios';
i18next.init(i18nextConfig);

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
        <I18nextProvider i18n={i18next}>
          <ScrollToTop>
            <>
              {!loaded && <Loading loading={loading} />}
              <div>
                <SWRConfig value={{ refreshInterval: 5000 }}>
                  <Router />
                </SWRConfig>
              </div>
            </>
          </ScrollToTop>
        </I18nextProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
