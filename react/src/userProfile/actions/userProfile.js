const FETCH_USER = 'FETCH_USER'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

export {
  FETCH_USER,
  FETCH_USER_SUCCESS
}

export const getUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    user: data
  }
}

export const getUser = (userId) => {
  return (dispatch) => {
    fetch(`/api/v1/users/${userId}`)
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
      let user = response.json()
      return user
    })
    .then(user => {
      return dispatch(getUserSuccess(user.user))
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
}
