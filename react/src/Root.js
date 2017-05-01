import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './sharedResources/store/configureStore';

import DeveloperProfileContainer from './developerProfile/containers/DeveloperProfileContainer'
import OrgProfileContainer from './organizationProfile/containers/OrgProfileContainer'
import ProjectShowContainer from './projectFeed/containers/ProjectShowContainer'
import ProjectIndexContainer from './projectFeed/containers/ProjectIndexContainer'

const Root = props => {
  return(
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path='developers/:id/profile' component={DeveloperProfileContainer} />
        <Route path='organizations/:id/profile' component={OrgProfileContainer}/>
        <Route path='projects' component={ProjectIndexContainer} />
        <Route path='projects/:id' component={ProjectShowContainer} />
      </Router>
    </Provider>
  )
}

export default Root;
