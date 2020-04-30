export const fetchAllRestaurants = () => {
    return $.ajax({
        url: `api/restaurants`,
        method: "GET"
    })
}

export const fetchRestaurant = RestaurantId => {
  return $.ajax({
    url: `api/restaurants/${RestaurantId}`,
    method: "GET",
  });
};