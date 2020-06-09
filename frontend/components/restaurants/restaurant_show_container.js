import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurants_actions";
import clearReviews from "../../actions/review_actions";
import RestaurantShow from "./restaurant_show";
import {deleteReview} from "../../actions/review_actions"

const mSTP = (state, ownProps) => {
  
  return {restaurant: state.entities.restaurants.allRestaurants[ownProps.match.params.id],
  reviews: state.entities.reviews,
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id] }
};

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  clearReviews: () => dispatch(clearReviews()),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});



export default connect(mSTP, mDTP)(RestaurantShow);
