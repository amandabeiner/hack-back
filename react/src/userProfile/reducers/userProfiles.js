import { FETCH_USER_SUCCESS } from '../actions/userProfile'

const initialState = {
  portfolio_projects: []
}

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.user
    default:
      return state;
  }
}
