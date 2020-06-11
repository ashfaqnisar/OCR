import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import { Router } from './Router/index';
import { LogoLoading } from '../../shared/components/Loading';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../redux/store';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { firebase } from '../../config';
import { SWRConfig } from 'swr';
import theme from '../../theme';

const App = () => {
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

  const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <LogoLoading />;
    return children;
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <AuthIsLoaded>
              <SWRConfig value={{ refreshInterval: 5000 }}>
                <Router />
              </SWRConfig>
            </AuthIsLoaded>
          </MuiThemeProvider>
        </ConnectedRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default hot(module)(App);
