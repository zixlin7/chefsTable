import { RECEIVE_RESTAURANT } from '../actions/restaurants_actions';
import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  CLEAR_REVIEWS,
} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return { ...action.payload.reviews };
    case RECEIVE_REVIEW:
      return { ...state, [action.payload.review.id]: action.payload.review };
    case REMOVE_REVIEW:
      const nextState = { ...state };
      delete nextState[action.reviewId];
      return nextState;
    case CLEAR_REVIEWS:
      return {};
    default:
      return state;
  }
};

export default reviewsReducer;
