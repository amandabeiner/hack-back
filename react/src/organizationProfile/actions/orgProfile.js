const FETCH_ORG_PROFILE = 'FETCH_ORG_PROFILE'
const FETCH_ORG_PROFILE_SUCCESS= 'FETCH_ORG_PROFILE_SUCCESS'

export {
  FETCH_ORG_PROFILE,
  FETCH_ORG_PROFILE_SUCCESS
}

export const getOrgProfileSuccess = data => {
  return {
    type: FETCH_ORG_PROFILE_SUCCESS,
    organization: data
  }
}

export const getOrgProfile = (id) => {
  return (dispatch) => {
    fetch(`/api/v1/organizations/${id}`).
    then(response => {
      let organization = response.json()
      return organization
    }).then(organization => {
      return dispatch(getOrgProfileSuccess(organization.organization))
    })
  }
}
