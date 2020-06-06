import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import { Router } from './Router/index';
import Loading from '../../shared/components/Loading';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../redux/store';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { firebase } from '../../config';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import theme from '../../theme';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  };

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
      setTimeout(() => setLoaded(true), 300);
    });
  }, []);

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            {!loaded && <Loading loading={loading} />}
            <div>
              <SWRConfig value={{ refreshInterval: 5000 }}>
                <Router />
              </SWRConfig>
            </div>
          </MuiThemeProvider>
        </ConnectedRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default hot(module)(App);
