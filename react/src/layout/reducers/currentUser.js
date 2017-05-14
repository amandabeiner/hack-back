import { FETCH_CURRENT_USER_SUCCESS } from '../actions/currentUser'

const initialState = {
  currentUser: {}
}

export const currentUserReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      newState = { currentUser: action.currentUser }
      return Object.assign({}, state, newState)
    default:
      return state;
  }
}
