import { combineReducers } from 'redux';
import { userProfileReducer as user } from '../userProfile/reducers/userProfiles'
import { routerReducer as routing } from 'react-router-redux';
import { orgProfileReducer as orgProfile } from '../organizationProfile/reducers/orgProfile'

const rootReducer = combineReducers({
  user,
  orgProfile,
  routing
})

export default rootReducer;
