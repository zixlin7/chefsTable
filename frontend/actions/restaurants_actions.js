import {fetchAllRestaurants, fetchRestaurant} from "../util/res_api_util";

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveRestaurants = restaurants => {
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
};

const receiveRestaurant = (restaurant) => {
  type: RECEIVE_RESTAURANT, 
  restaurant
};

export const requestRestaurants = () => dispatch(fetchAllRestaurants)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)));

export const requestRestaurants = () =>
  dispatch(fetchRestaurant).then((restaurant) =>
    dispatch(receiveRestaurant(restaurant))
  );