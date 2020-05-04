import { connect } from "react-redux";
import { requestRestaurants, requestRestaurant } from "../../actions/restaurants_actions";
import Search from "./search";
import {updateSearch, updateFilter} from "../../actions/search_actions"


const mSTP = (state, ownProps) => ({
    restaurants: state.entities.restaurants,
    search: state.ui.search
});

const mDTP = (dispatch) => ({
    requestRestaurants: (filters) => dispatch(requestRestaurants(filters)),
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value)),
    updateFilter: (cuisineFilter, priceFilter) => dispatch(updateFilter(cuisineFilter, priceFilter))
});



export default connect(mSTP, mDTP)(Search);