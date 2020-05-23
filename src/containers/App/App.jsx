import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import 'firebase/auth';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import ScrollToTop from './ScrollToTop';
import { config as i18nextConfig } from '../../translations';
import Auth0Provider from '../../shared/components/auth/withAuth0';
import Loading from '../../shared/components/Loading';
import auth0Config from '../../config/auth0';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../redux/store';

i18next.init(i18nextConfig);

class App extends Component {
  state = {
    loading: true,
    loaded: false
  };

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 300);
    });
  }

  onRedirectCallbackAuth0 = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  render() {
    const { loaded, loading } = this.state;
    return (
      <Provider store={store}>
        <Auth0Provider
          domain={auth0Config.domain}
          client_id={auth0Config.clientId}
          redirect_uri={`${window.location.origin}/home`}
          returnTo={`${window.location.origin}/home`}
          onRedirectCallback={this.onRedirectCallbackAuth0}
        >
          <ConnectedRouter history={history}>
            <I18nextProvider i18n={i18next}>
              <ScrollToTop>
                <>
                  {!loaded && <Loading loading={loading} />}
                  <div>
                    <Router />
                  </div>
                </>
              </ScrollToTop>
            </I18nextProvider>
          </ConnectedRouter>
        </Auth0Provider>
      </Provider>
    );
  }
}

export default hot(module)(App);
