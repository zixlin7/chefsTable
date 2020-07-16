import {
    RECEIVE_ALL_RESTAURANTS, 
    RECEIVE_RESTAURANT,
} from "../actions/restaurants_actions";

import { RECEIVE_USER } from "../actions/users_actions"
import { UPDATE_FILTER } from "../actions/search_actions"
import { UPDATE_FILTER_RESTAURANTS } from "../actions/filter_actions"
import resSelector from "../util/restaurants_selector"
import { REMOVE_REVIEW } from "../actions/review_actions";

const restaurantsReducer = (state={allRestaurants: {}, filterRestaurants: {}}, action) => {
    switch (action.type) {
      case RECEIVE_ALL_RESTAURANTS:
        return { allRestaurants : action.restaurants, filterRestaurants: {} };
      case RECEIVE_RESTAURANT:
        const nextState = {...state}
        nextState.allRestaurants[action.payload.restaurant.id] = action.payload.restaurant
        return nextState;
      case UPDATE_FILTER:
        let newRestaurants = resSelector({ ...state.allRestaurants }, action.filterState)
        return { filterRestaurants: newRestaurants, allRestaurants: state.allRestaurants };
      case UPDATE_FILTER_RESTAURANTS:
        return { filterRestaurants: action.restaurants, allRestaurants: state.allRestaurants }
      case RECEIVE_USER:
        return { ...state, ...action.payload.restaurants }

      default:
        return state;
    }
}

export default restaurantsReducer;