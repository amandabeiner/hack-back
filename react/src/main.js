import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SignInTile from './static/SignInTile'

if(document.getElementById('app')){
  ReactDOM.render(
    <SignInTile/>, document.getElementById('app')
  );
}
