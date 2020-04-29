class Restaurant < ApplicationRecord
    validates :name, :chef_id, :address, :country, :state, :city, :zip, :capacity, presence:true
    
    has_many :reservations, class_name: :Reservation
    has_many :reserved_users,
        through: :reservations,
        source: :user
end
