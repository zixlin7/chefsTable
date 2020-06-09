import { connect } from "react-redux";
import { requestRestaurants, requestRestaurant } from "../../actions/restaurants_actions";
import Search from "./search";
import {updateSearch, resetFilter} from "../../actions/search_actions"
import updateFilter from "../../actions/search_actions";


const mSTP = (state, ownProps) => {
    return({restaurants: state.entities.restaurants,
    search: state.ui.search,
    filter: state.ui.filter
    })
    
};

const mDTP = (dispatch) => ({
    requestRestaurants: (filters) => dispatch(requestRestaurants(filters)),
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    updateSearch: (field, value) => dispatch(updateSearch(field, value)),
    resetFilter: () => dispatch(resetFilter()),
    updateFilter: (filterState) => dispatch(updateFilter(filterState))
});



export default connect(mSTP, mDTP)(Search);