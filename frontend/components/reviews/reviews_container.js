import { connect } from 'react-redux';

import { createReview } from "../../actions/review_actions";
import {requestRestaurant} from "../../actions/restaurants_actions"
import ReviewForm from './review_form';


const mSTP = (state, ownProps) => ({
    review: {
            user_id: state.session.id,
            restaurant_id: ownProps.match.params.id,
            rating: 5,
            title: "",
            body: ""
    },
    formType: "create review",
    user: state.entities.users[state.session.id],
    userId: state.session.id,
    restaurant: state.entities.restaurants[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(
    mSTP,
    mDTP
)(ReviewForm);