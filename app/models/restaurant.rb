class Restaurant < ApplicationRecord
    validates :name, :chef_id, :address, :country, 
              :state, :city, :zip, :capacity, presence:true

end
