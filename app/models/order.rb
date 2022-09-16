class Order < ApplicationRecord
  belongs_to :user

  validates :name, :address, presence: true, on: :create
end
