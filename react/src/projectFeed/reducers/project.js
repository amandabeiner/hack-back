import { FETCH_PROJECT_SUCCESS } from '../actions/project'

const initialState = {
  project: {
    organization: {},
    contact: {}
  }
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_SUCCESS:
      let newState = { project: action.project }
      return Object.assign({}, newState)
    default:
      return state;
  }
}
