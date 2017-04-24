import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SignInTile from './static/SignInTile'
import Root from './Root'

if(document.getElementById('app')){
  ReactDOM.render(
    <SignInTile/>, document.getElementById('app')
  );
}

if(document.getElementById('main')){
  ReactDOM.render(
    <Root />, document.getElementById('main')
  )
}
