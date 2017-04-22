import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './sharedResources/store/configureStore';

import SignInTile from './static/SignInTile'
import App from './userProfile/containers/App'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

if(document.getElementById('app')){
  ReactDOM.render(
    <SignInTile/>, document.getElementById('app')
  );
}

if(document.getElementById('main')){
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='profile' component={App} />
      </Router>
    </Provider>, document.getElementById('main')
  )
}
