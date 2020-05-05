import { connect } from "react-redux";
import { requestRestaurants, requestRestaurant } from "../../actions/restaurants_actions";
import Search from "./search";
import {updateSearch} from "../../actions/search_actions"


const mSTP = (state, ownProps) => {
    return({restaurants: state.entities.restaurants,
    search: state.ui.search})
};

const mDTP = (dispatch) => ({
    requestRestaurants: (filters) => dispatch(requestRestaurants(filters)),
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value)),
   
});



export default connect(mSTP, mDTP)(Search);