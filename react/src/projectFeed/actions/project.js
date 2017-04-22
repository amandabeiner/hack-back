const FETCH_PROJECT = 'FETCH_PROJECT'
const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS'
const FETCH_ALL_PROJECTS_SUCCESS = 'FETCH_ALL_PROJECTS_SUCCESS'

export {
  FETCH_PROJECT,
  FETCH_PROJECT_SUCCESS,
  FETCH_ALL_PROJECTS_SUCCESS
}

export const getProjectSuccess = data => {
  return {
    type: FETCH_PROJECT_SUCCESS,
    project: data
  }
}

export const getAllProjectsSuccess = data => {
  return {
    type: FETCH_ALL_PROJECTS_SUCCESS,
    allProjects: data
  }
}

export const getProject = (id) => {
  return (dispatch) => {
    fetch(`/api/v1/projects/${id}`).
    then(response => {
      let project = response.json()
      return project
    }).then(project => {
      return dispatch(getProjectSuccess(project.project))
    })
  }
}

export const getAllProjects = () => {
  return (dispatch) => {
    fetch(`/api/v1/projects`).
    then(response => {
      let projects = response.json()
      return projects
    }).then(projects => {
      return dispatch(getAllProjectsSuccess(projects.projects))
    })
  }
}
