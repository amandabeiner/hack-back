import { FETCH_DEVELOPER_SUCCESS } from '../actions/developerProfile'
import { DISPLAY_NEXT_REVIEWS } from '../actions/displayReviews'
import { HIDE_EXTRA_REVIEWS } from '../actions/displayReviews'

const initialState = {
  skills: '',
  portfolio_projects: [],
  projects: [],
  reviews: [],
  lastVisibleReviewIndex: 4
}

export const developerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVELOPER_SUCCESS:
      return Object.assign({}, state, action.developer)
    case DISPLAY_NEXT_REVIEWS:
      let showState = { lastVisibleReviewIndex: state.lastVisibleReviewIndex + 5 }
      return Object.assign({}, state, showState)
    case HIDE_EXTRA_REVIEWS:
      let hideState = { lastVisibleReviewIndex: 4 }
      return Object.assign({}, state, hideState)
    default:
      return state;
  }
}
