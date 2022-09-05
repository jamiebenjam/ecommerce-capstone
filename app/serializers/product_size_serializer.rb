class ProductSizeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :product
  has_one :size
end
