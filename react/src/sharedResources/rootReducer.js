import { combineReducers } from 'redux';
import { puppyReducer as puppies } from '../puppySetup/reducers/puppies'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  puppies,
  routing
})

export default rootReducer;
