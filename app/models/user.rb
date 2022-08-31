class User < ApplicationRecord
    has_many :orders
    has_secure_password

#     PASSWORD_REQUIREMENTS = /\A
#   (?=.{8,})          # Must contain 8 or more characters
#   (?=.*\d)           # Must contain a digit
#   (?=.*[a-z])        # Must contain a lower case character
#   (?=.*[A-Z])        # Must contain an upper case character
#   (?=.*[[:^alnum:]]) # Must contain a symbol
# /x

    validates :email, uniqueness: true
    validates :email, :address, :password, :first_name, :last_name, :password_confirmation, presence: true, on: :create
    # validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create 
end
