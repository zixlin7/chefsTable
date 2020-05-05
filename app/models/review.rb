class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }, presence: true
    validates :user_id, :restaurant_id, :title, :body, presence:true

    belongs_to :restaurant
    belongs_to :user
end
