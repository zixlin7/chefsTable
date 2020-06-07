class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, :number_of_party, :time, presence: true
    # validates :time, uniqueness: {scope: :user_id}

    belongs_to :user, class_name: :User
    belongs_to :restaurant, class_name: :Restaurant

    def self.comfirm_availability(reservation)
        start_time = reservation.time - 2.hours
        end_time = reservation.time + 2.hours
        reservations = reservation.restaurant.reservations.where("time BETWEEN ? AND ?", start_time, end_time)
        number_of_people = 0
        reservations.to_a.each do |reservation|
            number_of_people += reservation.number_of_party
        end
        reservation.restaurant.capacity > (number_of_people + reservation.number_of_party)
    end
end
