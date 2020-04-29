import {connect} from "react-redux";
import {requestRestaurants, requestRestaurant} from "../../actions/restaurants_actions";
import RestaurantsIndex from "./restaurant_index";


const mSTP = (state, ownProps) => ({
    restaurants: state.entities.restaurants
});

const mDTP = (dispatch) => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
  requestRestaurant: (restaurantId) =>
    dispatch(requestRestaurant(restaurantId)),
});



export default connect(mSTP, mDTP)(RestaurantsIndex);