class OrderSerializer < ActiveModel::Serializer
  attributes :id, :amount, :address, :status, :invoice, :email, :name
  has_one :user
end
