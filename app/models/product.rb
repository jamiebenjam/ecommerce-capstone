class Product < ApplicationRecord
    has_many :product_sizes
    has_many :sizes, through: :product_sizes
    has_many :product_categories
    has_many :categories, through: :product_categories
    has_many :product_orders
    has_many :orders, through: :product_orders
    
end
