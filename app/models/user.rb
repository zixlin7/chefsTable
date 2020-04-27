class User < ApplicationRecord
    validates :firstname, :lastname, presence:true
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password, length: [minimal: 6, allow_nil: true]

    before_validation :ensure_session_token
    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials
        @user = User.find_by(email: email)
        return nil unless @user
        self.is_password?(password) ? @user : nil
    end

    def is_password?(password)
        Crypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
    end
end
