const FETCH_PROJECT = 'FETCH_PROJECT'
const FETCH_PROJECT_SUCCESS= 'FETCH_PROJECT_SUCCESS'

export {
  FETCH_PROJECT,
  FETCH_PROJECT_SUCCESS
}

export const getProjectSuccess = data => {
  return {
    type: FETCH_PROJECT_SUCCESS,
    project: data
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
