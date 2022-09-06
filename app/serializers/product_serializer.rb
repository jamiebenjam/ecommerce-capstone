class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :price, :color, :isActive, :created_at
    has_many :product_sizes
    has_many :sizes, through: :product_sizes
    has_many :product_categories
    has_many :categories, through: :product_categories
    # has_many :product_orders
    # has_many :orders, through: :product_orders
end
