import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../rootReducer';

export default function configureStore(){
  let middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )

  return store;
}
