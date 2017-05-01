import { combineReducers } from 'redux';
import { developerProfileReducer as developer } from '../developerProfile/reducers/developerProfiles'
import { routerReducer as routing } from 'react-router-redux';
import { orgProfileReducer as orgProfile } from '../organizationProfile/reducers/orgProfile'
import { projectReducer as project } from '../projectFeed/reducers/project'
const rootReducer = combineReducers({
  developer,
  orgProfile,
  project,
  routing
})

export default rootReducer;
