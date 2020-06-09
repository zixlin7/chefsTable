export const UPDATE_FILTER_RESTAURANTS = "UPDATE_FILTER_RESTAURANTS";

const updateFilterRestaurants = (restaurants) => ({
    type: UPDATE_FILTER_RESTAURANTS,
    restaurants
})
export default updateFilterRestaurants;