@restaurants. each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :name, :cuisine, :price_range, :city
    end
end