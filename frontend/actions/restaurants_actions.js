import { fetchAllRestaurants, fetchRestaurant } from '../util/res_api_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveAllRestaurants = (restaurants) => {
  return { type: RECEIVE_ALL_RESTAURANTS, restaurants };
};

const receiveRestaurant = (payload) => ({
  type: RECEIVE_RESTAURANT,
  payload,
});

export const requestRestaurants = (filters) => (dispatch) =>
  fetchAllRestaurants(filters).then((restaurants) =>
    dispatch(receiveAllRestaurants(restaurants))
  );

export const requestRestaurant = (restaurantId) => (dispatch) =>
  fetchRestaurant(restaurantId).then((payload) =>
    dispatch(receiveRestaurant(payload))
  );
