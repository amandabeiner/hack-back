import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import SignInTile from './static/SignInTile'
import App from './containers/App'

const store = configureStore();

if(document.getElementById('app')){
  ReactDOM.render(
    <SignInTile/>, document.getElementById('app')
  );
}

if(document.getElementById('main')){
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('main')
  )
}
