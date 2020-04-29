@restaurants. each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :name, :cuisine, :price_range, :city, :capacity, :open_hour, :close_hour
    end
end