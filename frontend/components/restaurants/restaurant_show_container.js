import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurants_actions";
import RestaurantShow from "./restaurant_show";

const mSTP = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id],
  reviews: state.entities.reviews,
  users: state.entities.users 
});

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) =>
    dispatch(requestRestaurant(restaurantId)),
});

export default connect(mSTP, mDTP)(RestaurantShow);
