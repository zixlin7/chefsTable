import { connect } from "react-redux";
import { requestRestaurants, requestRestaurant } from "../actions/restaurants_actions";
import { updateSearch } from "../actions/search_actions";
import Landing from "./landing"

const mSTP = state => ({
    restaurants: state.entities.restaurants.allRestaurants,
    search: state.ui.search

});

const mDTP = dispatch => ({
    requestRestaurants: (filters) => dispatch(requestRestaurants(filters)),
    requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value))
})

export default connect(mSTP, mDTP)(Landing);