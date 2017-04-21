import { combineReducers } from 'redux';
import PuppyReducer from './puppies'

const rootReducer = combineReducers({
  puppies: PuppyReducer
})

export default rootReducer;
