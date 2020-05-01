import {
    RECEIVE_ALL_RESTAURANTS, 
    RECEIVE_RESTAURANT
    } 
    from "../actions/restaurants_actions";

const restaurantsReducer = (state={}, action) => {
  
    switch (action.type) {
      case RECEIVE_ALL_RESTAURANTS:
        return action.restaurants;
      case RECEIVE_RESTAURANT:
        const nextState = {...state}
        nextState[action.restaurant.id] = action.restaurant
        return nextState;
      default:
        return state;
    }
}

export default restaurantsReducer;