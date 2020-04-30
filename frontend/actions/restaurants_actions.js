import {fetchAllRestaurants, fetchRestaurant} from "../util/res_api_util";

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveAllRestaurants = restaurants => {
    
    return {type: RECEIVE_ALL_RESTAURANTS,
    restaurants}
};

const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT, 
  restaurant
});

export const requestRestaurants = () => dispatch => fetchAllRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)),
    );

export const requestRestaurant = (restaurantId) => dispatch =>
         fetchRestaurant(restaurantId).then((restaurant) =>
           dispatch(receiveRestaurant(restaurant))
         );