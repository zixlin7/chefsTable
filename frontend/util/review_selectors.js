export const selectRestaurant = ({ restaurants }, restaurantId) => {
    return restaurants[restaurantId] || { reviewIds: [] };
};

export const selectReviewsForRestaurant = (reviews, restaurant) => {
    return restaurant.review_ids.map(reviewId => reviews[reviewId]);
};

