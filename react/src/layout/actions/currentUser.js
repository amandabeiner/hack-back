const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS'

export {
  FETCH_CURRENT_USER_SUCCESS
}

export const getCurrentUserSuccess = data => {
  return {
    type: FETCH_CURRENT_USER_SUCCESS,
    currentUser: data
  }
}

export const getCurrentUser = () => {
  return (dispatch) => {
    fetch('/api/v1/sessions', { credentials: 'same-origin' }).
    then(response => {
      let parsed = response.json()
      return parsed
    }).then(currentUser => {
      dispatch(getCurrentUserSuccess(currentUser))
    })
  }
}
