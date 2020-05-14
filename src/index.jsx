import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'https://f632cbf77922400295c68e0e115da45a@o361783.ingest.sentry.io/5240339'
});

render(<App />, document.getElementById('root'));
