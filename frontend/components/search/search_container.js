import { connect } from "react-redux";
import { requestRestaurants, requestRestaurant } from "../../actions/restaurants_actions";
import Search from "./search";
import {updateSearch} from "../../actions/search_actions"


const mSTP = (state, ownProps) => ({
    restaurants: state.entities.restaurants
});

const mDTP = (dispatch) => ({
    requestRestaurants: () => dispatch(requestRestaurants()),
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value))
});



export default connect(mSTP, mDTP)(Search);