# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# u1 = User.create(
#     first_name: 'Jamie',
#     last_name: 'Benjamin',
#     email: 'jamie@gmail.com',
#     password_digest: BCrypt::Password.create('password'),
#     address: '123 Main Street'
# )

p1 = Product.create(
    title: 'CC3667',
    description: 'Keep it classy with this full flare chaniya choli featuring a  silk chaniya with embroidery border and  blouse and georgette dupatta.' 
)

c1 = Cart.create(
    id: 1
)

# o1 = Order.create(
#     user_id: u1.id,
#     amount: 100,
#     address: '456 Side Street',
#     status: 'pending',
#     invoice: 'please wait on your order',
#     email: 'jamie@gmail.com',
#     name: 'jim benjim'
# )

# sp1 = SelectedProduct.create(
#     cart_id: c1.id,
#     order_id: o1.id,
#     quantity: 2,
#     product_id: p1.id,
#     size: 'small',
#     color: 'blue',
#     price: 50
# )

cg1 = Category.create(
    name: 'lehenga',
    description: 'Lehenga',
    isActive: true
)

pc1 = ProductCategory.create(
    product_id: p1.id,
    category_id: cg1.id
)