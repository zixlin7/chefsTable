import { connect } from 'react-redux';

import { createReview } from "../../actions/review_actions";
import {requestRestaurant} from "../../actions/restaurants_actions"
import ReviewForm from './review_form';


const mSTP = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    userId: state.session.id,
    restaurant: state.entities.restaurants[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(
    mSTP,
    mDTP
)(ReviewForm);