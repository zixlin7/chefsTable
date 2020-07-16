import { connect } from 'react-redux';

import { updateReview } from "../../actions/review_actions";
import {requestRestaurant} from "../../actions/restaurants_actions";
import {fetchReview} from "../../actions/review_actions";
import EditReviewForm from './edit_review_form';


const mSTP = (state, ownProps) => {
    return{review: state.entities.reviews[ownProps.match.params.reviewId],
    formType:"update review",
    user: state.entities.users[state.session.id],
    userId: state.session.id,
    restaurant: state.entities.restaurants.allRestaurants[ownProps.match.params.id]}
}

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review)),
    requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId)),
    fetchReview: reviewId => dispatch(fetchReview(reviewId))
});

export default connect(
    mSTP,
    mDTP
)(EditReviewForm);