import { FETCH_PROJECT_SUCCESS, FETCH_ALL_PROJECTS_SUCCESS } from '../actions/project'

const initialState = {
  project: {
    organization: {},
    contact: {}
  },
  allProjects: []
}

export const projectReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case FETCH_PROJECT_SUCCESS:
      newState = { project: action.project }
      return Object.assign({}, state, newState)
    case FETCH_ALL_PROJECTS_SUCCESS:
      newState = { allProjects: action.allProjects }
      return Object.assign({}, state, newState)
    default:
      return state;
  }
}
