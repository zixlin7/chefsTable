import {connect} from "react-redux";
import {requestRestaurants} from "../../actions/restaurants_actions";
import RestaurantsIndex from "./restaurant_index";


const mSTP = (state, ownProps) => ({
    restaurants: state.entities.restaurants
});

const mDTP = (dispatch) => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
});



export default connect(mSTP, mDTP)(RestaurantsIndex);