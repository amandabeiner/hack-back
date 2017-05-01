import { FETCH_DEVELOPER_SUCCESS } from '../actions/developerProfile'

const initialState = {
  portfolio_projects: []
}

export const developerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVELOPER_SUCCESS:
      return action.developer
    default:
      return state;
  }
}
