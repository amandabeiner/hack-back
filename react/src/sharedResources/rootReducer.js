import { combineReducers } from 'redux';
import { userProfileReducer as user } from '../userProfile/reducers/userProfiles'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  user,
  routing
})

export default rootReducer;
