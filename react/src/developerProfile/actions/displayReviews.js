const DISPLAY_NEXT_REVIEWS = 'DISPLAY_NEXT_REVIEWS'
const HIDE_EXTRA_REVIEWS = 'HIDE_EXTRA_REVIEWS'

export {
  DISPLAY_NEXT_REVIEWS,
  HIDE_EXTRA_REVIEWS
}

const displayNextReviews = () => ({
  type: DISPLAY_NEXT_REVIEWS
})

const hideExtraReviews = () => ({
  type: HIDE_EXTRA_REVIEWS
})

export {
  displayNextReviews,
  hideExtraReviews
}
