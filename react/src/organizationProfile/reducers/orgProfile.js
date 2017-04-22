import { FETCH_ORG_PROFILE_SUCCESS } from '../actions/orgProfile'

const initialState = {
  organization: {
    user: {}
  }
}

export const orgProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORG_PROFILE_SUCCESS:
      let newState = { organization: action.organization }
      return Object.assign({}, newState)
    default:
      return state;
  }
}
