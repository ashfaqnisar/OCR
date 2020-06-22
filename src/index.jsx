import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import * as Sentry from '@sentry/browser';

function getEnvironment() {
  if (process.env.NODE_ENV === 'development') {
    return 'development';
  } else if (process.env.NODE_ENV === 'production') {
    return 'production';
  }
}

Sentry.init({
  environment: getEnvironment(),
  dsn:
    'https://f632cbf77922400295c68e0e115da45a@o361783.ingest.sentry.io/5240339'
});

render(<App />, document.getElementById('root'));
