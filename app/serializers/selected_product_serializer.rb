class SelectedProductSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :size, :color, :price
  has_one :cart
  has_one :order
  has_one :product
end
