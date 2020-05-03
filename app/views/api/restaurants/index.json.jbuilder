@restaurants. each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :cuisine, :price_range, :city, :capacity, :open_hour, :close_hour
        json.photoURL url_for(restaurant.profilepic)
    end
end