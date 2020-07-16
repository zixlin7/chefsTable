import * as ReviewAPIUtil from '../util/review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';

const receiveReview = (payload) => {
  return {
    type: RECEIVE_REVIEW,
    payload,
  };
};

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

const clearReview = () => ({
  type: CLEAR_REVIEWS,
});

export default clearReview;

export const fetchReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.fetchReview(reviewId).then((payload) =>
    dispatch(receiveReview(payload))
  );

export const createReview = (review) => (dispatch) =>
  ReviewAPIUtil.createReview(review).then((payload) =>
    dispatch(receiveReview(payload), (err) =>
      dispatch(receiveErrors(err.responseJSON))
    )
  );

export const updateReview = (review) => (dispatch) =>
  ReviewAPIUtil.updateReview(review).then((payload) =>
    dispatch(receiveReview(payload), (err) =>
      dispatch(receiveErrors(err.responseJSON))
    )
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.deleteReview(reviewId).then((reviewId) =>
    dispatch(removeReview(reviewId))
  );
