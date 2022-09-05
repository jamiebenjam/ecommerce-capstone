# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Categories
c1 = Category.create(name: 'Lehenga')
c2 = Category.create(name: 'Chaniya Choli')
c3 = Category.create(name: 'Dress')
c4 = Category.create(name: 'Gown')
c5 = Category.create(name: 'Saree')
c6 = Category.create(name: 'Blouse')
c7 = Category.create(name: 'Duster')
c8 = Category.create(name: 'Dupatta')
c9 = Category.create(name: 'Jewelry')
c10 = Category.create(name: 'Bag')

#ProductCategory
pc1 = ProductCategory.create(product_id: 1, category_id: c1.id)
pc2 = ProductCategory.create(product_id: 2, category_id: c5.id)
