export const fetchAllRestaurants = (filters) => {
  debugger
    return $.ajax({
        url: `api/restaurants`,
        method: "GET",
        data: {filters}
    })
}

export const fetchRestaurant = RestaurantId => {
  return $.ajax({
    url: `api/restaurants/${RestaurantId}`,
    method: "GET",
  });
};