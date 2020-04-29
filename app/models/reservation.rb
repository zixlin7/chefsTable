class Reservation < ApplicationRecord
    validates :restaurant_id, :user_id, :number_of_party, :time, presence: true
    validates :time, uniqueness: {scope: :user_id}

    belongs_to :user, class_name: :User
    belongs_to :restaurant, class_name: :Restaurant
end
