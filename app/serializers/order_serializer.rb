class OrderSerializer < ActiveModel::Serializer
  attributes :id, :amount, :status, :name, :email, :address
  has_one :user
end
