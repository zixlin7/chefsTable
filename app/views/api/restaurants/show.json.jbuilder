json.restaurant do  
    json.extract! @restaurant, *@restaurant.attributes.keys, :review_ids
    json.photoURL url_for(@restaurant.profilepic)
    json.average_rating restaurant.average_rating
end

@restaurant.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :firstname, :email, :lastname
    end
  end
end