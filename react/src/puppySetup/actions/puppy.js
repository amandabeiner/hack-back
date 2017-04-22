const FETCH_PUPPY_GIF = 'FETCH_PUPPY_GIF'
const FETCH_PUPPY_GIF_SUCCESS= 'FETCH_PUPPY_GIF_SUCCESS'

export {
  FETCH_PUPPY_GIF,
  FETCH_PUPPY_GIF_SUCCESS
}

export const getPuppySuccess = data => {
  return {
    type: FETCH_PUPPY_GIF_SUCCESS,
    puppies: data.data
  }
}

export const getPuppy = () => {
  return (dispatch) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC').
    then(response => {
      let dogs = response.json()
      return dogs
    }).then(dogs => {
      return dispatch(getPuppySuccess(dogs))
    })
  }
}
