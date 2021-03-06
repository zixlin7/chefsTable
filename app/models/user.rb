class User < ApplicationRecord
    validates :firstname, :lastname, presence:true
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

    has_many :reservations, 
        class_name: :Reservation
    has_many :reserved_restaurants,
        through: :reservations,
        source: :restaurant
    has_many :reviews
    has_many :reviewed_restaurants,
        through: :reviews,
        source: :restaurant
    
    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        session_token
    end
end
