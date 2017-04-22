import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './sharedResources/store/configureStore';

import SignInTile from './static/SignInTile'
import DevProfileContainer from './userProfile/containers/DevProfileContainer'
import OrgProfileContainer from './organizationProfile/containers/OrgProfileContainer'
import ProjectShowContainer from './projectFeed/containers/ProjectShowContainer'
import ProjectIndexContainer from './projectFeed/containers/ProjectIndexContainer'

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
        <Route path='developers/:id/profile' component={DevProfileContainer} />
        <Route path='organizations/:id/profile' component={OrgProfileContainer}/>
        <Route path='projects' component={ProjectIndexContainer} />
        <Route path='projects/:id' component={ProjectShowContainer} />
      </Router>
    </Provider>, document.getElementById('main')
  )
}
