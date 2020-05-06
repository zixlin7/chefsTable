import {
    RECEIVE_ALL_RESTAURANTS, 
    RECEIVE_RESTAURANT,
    } 
    from "../actions/restaurants_actions";

  import {RECEIVE_USER} from "../actions/users_actions"

import {UPDATE_FILTER} from "../actions/search_actions"
import resSelector from "../util/restaurants_selector"

const restaurantsReducer = (state={}, action) => {
  
    switch (action.type) {
      case RECEIVE_ALL_RESTAURANTS:
        return action.restaurants;
      case RECEIVE_RESTAURANT:
        const nextState = {...state}
        nextState[action.payload.restaurant.id] = action.payload.restaurant
        return nextState;
      case UPDATE_FILTER:
        return resSelector({...state}, action.cuisineFilter, action.priceFilter)
      case RECEIVE_USER:
        return {...state, ...action.payload.restaurants}
      default:
        return state;
    }
}

export default restaurantsReducer;