import { combineReducers } from 'redux';
import { userProfileReducer as user } from '../userProfile/reducers/userProfiles'
import { routerReducer as routing } from 'react-router-redux';
import { orgProfileReducer as orgProfile } from '../organizationProfile/reducers/orgProfile'
import { projectReducer as project } from '../projectFeed/reducers/project'
const rootReducer = combineReducers({
  user,
  orgProfile,
  project,
  routing
})

export default rootReducer;
