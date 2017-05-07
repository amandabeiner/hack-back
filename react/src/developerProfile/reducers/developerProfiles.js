import { FETCH_DEVELOPER_SUCCESS } from '../actions/developerProfile'

const initialState = {
  skills: '',
  portfolio_projects: [],
  projects: []
}

export const developerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVELOPER_SUCCESS:
      return action.developer
    default:
      return state;
  }
}
