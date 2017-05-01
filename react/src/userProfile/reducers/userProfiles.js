import { FETCH_USER_SUCCESS } from '../actions/userProfile'

const initialState = {
  user: {
    portfolioProjects: []
  }
}

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      let newState = { user: action.user }
      return Object.assign({}, newState)
    default:
      return state;
  }
}
