import { FETCH_PUPPY_GIF_SUCCESS } from '../actions/puppy'

const initialState = {
  puppies: []
}

export const puppyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUPPY_GIF_SUCCESS:
      let newState = { puppies: action.puppies }
      return Object.assign({}, newState)
    default:
      return state;
  }
}
