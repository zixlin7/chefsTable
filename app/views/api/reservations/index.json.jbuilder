@reservations. each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, *reservation.attributes.keys
    end
end