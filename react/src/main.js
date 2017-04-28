import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import configureStore from './sharedResources/store/configureStore';

import SignInTile from './static/SignInTile'
import Root from './Root'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

if(document.getElementById('app')){
  ReactDOM.render(
    <SignInTile/>, document.getElementById('app')
  );
}

if(document.getElementById('main')){
  ReactDOM.render(
    <Root store={store} history={history}/>, document.getElementById('main')
  )
}
