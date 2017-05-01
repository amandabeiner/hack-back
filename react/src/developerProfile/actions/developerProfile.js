const FETCH_DEVELOPER = 'FETCH_DEVELOPER'
const FETCH_DEVELOPER_SUCCESS = 'FETCH_DEVELOPER_SUCCESS'

export {
  FETCH_DEVELOPER,
  FETCH_DEVELOPER_SUCCESS
}

export const getDeveloperSuccess = data => {
  return {
    type: FETCH_DEVELOPER_SUCCESS,
    developer: data
  }
}

export const getDeveloper = (developerId) => {
  return (dispatch) => {
    fetch(`/api/v1/developers/${developerId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      let developer = response.json()
      return developer
    })
    .then(developer => {
      return dispatch(getDeveloperSuccess(developer.developer))
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}
