json.user do
    json.extract! @user, :firstname, :lastname, :email, :id, :reservation_ids
end

@user.reservations.includes(:restaurant).each do |reservation|
    json.reservations do
        json.set! reservation.id do
            json.extract! reservation, :id, :user_id, :restaurant_id, :time
        end
    end

    json.restaurants do 
        json.set! reservation.restaurant.id do
            json.extract! reservation.restaurant, :name
            json.photoURL url_for(reservation.restaurant.profilepic)
        end
    end
end