import { combineReducers } from 'redux';
import { puppyReducer as puppies } from '../puppySetup/reducers/puppies'
import { orgProfileReducer as orgProfile } from '../organizationProfile/reducers/orgProfile'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  puppies,
  orgProfile,
  routing
})

export default rootReducer;
