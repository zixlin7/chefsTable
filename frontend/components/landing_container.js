import {connect} from "react-redux";
import {requestRestaurants} from "../actions/restaurants_actions";
import {updateSearch} from "../actions/search_actions";
import Landing from "./landing"

const mSTP = state => ({
    restaurants: state.entities.restaurants,
    search: state.ui.search

});

const mDTP = dispatch => ({
    requestRestaurants: (filters) => dispatch(requestRestaurants(filters)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value))
})

export default connect(mSTP, mDTP)(Landing);