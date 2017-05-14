import { combineReducers } from 'redux';
import { developerProfileReducer as developer } from '../developerProfile/reducers/developerProfiles'
import { routerReducer as routing } from 'react-router-redux';
import { orgProfileReducer as orgProfile } from '../organizationProfile/reducers/orgProfile'
import { projectReducer as project } from '../projectFeed/reducers/project'
import { currentUserReducer as currentUser } from './reducers/currentUser'
const rootReducer = combineReducers({
  developer,
  orgProfile,
  project,
  routing,
  currentUser
})

export default rootReducer;
