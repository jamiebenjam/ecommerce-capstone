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

#Products
p1 = Product.create(
    title: 'CC3666', 
    description: '3 piece', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/image_411b2dac-418a-4134-a411-8465f66083b7_540x.jpg?v=1662554510',
    price: 390,
    color: 'Purple, red, blue',
    isActive: true
)

p2 = Product.create(
    title: 'CC3599', 
    description: 'Pink organza silk lehenga choli', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/dress1-56_900x.jpg?v=1647637195',
    price: 250,
    color: 'Pink',
    isActive: true
)

p3 = Product.create(
    title: 'SR1109A', 
    description: 'Silk saree with designer bllouse and matching petticoat', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/saree10sareewithblouse_900x.jpg?v=1631582128',
    price: 350,
    color: 'Navy',
    isActive: true
)

p4 = Product.create(
    title: 'AG1886', 
    description: 'Velvet gown with slit', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/AG1886-velvet-gown-with-slit-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_chicago-indian_dresses_usa_900x.jpg?v=1656906563',
    price: 190,
    color: 'Blue/green',
    isActive: true
)

p5 = Product.create(
    title: 'BL1714', 
    description: 'Embroidered top', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/bl1714-blouse-readymade_saree_blouse_online_usa-saree_blouse_usa_900x.jpg?v=1657601181',
    price: 250,
    color: 'Blue, yellow',
    isActive: true
)

p6 = Product.create(
    title: 'K1002', 
    description: 'Shaded hand block printed duster', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/dresses6K8A9250indiandressesusa_900x.jpg?v=1651375933',
    price: 160,
    color: 'Cream, orange',
    isActive: true
)

p7 = Product.create(
    title: 'K1002', 
    description: 'Silk shaded scarf with embroidery', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/lehengacholiusa9chaniyacholiusa_900x.jpg?v=1651087280',
    price: 99,
    color: 'Pink, green',
    isActive: true
)

p8 = Product.create(
    title: 'JW1351', 
    description: 'Necklace earring set', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/image_e1ed7b96-6ff8-4222-b7c0-dfb98669000a_900x.jpg?v=1662086005',
    price: 15,
    color: 'Pink, green',
    isActive: true
)

p9 = Product.create(
    title: 'AB1024', 
    description: 'Small purse with round handle', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/partyclutches25slingbag_900x.jpg?v=1656379121',
    price: 30,
    color: 'Brown, gold',
    isActive: true
)


#ProductCategory
pc1 = ProductCategory.create(product_id: p1.id, category_id: c2.id)
pc2 = ProductCategory.create(product_id: p2.id, category_id: c1.id)
pc3 = ProductCategory.create(product_id: p2.id, category_id: c2.id)
pc4 = ProductCategory.create(product_id: p3.id, category_id: c5.id)
pc5 = ProductCategory.create(product_id: p4.id, category_id: c4.id)
pc6 = ProductCategory.create(product_id: p5.id, category_id: c6.id)
pc7 = ProductCategory.create(product_id: p6.id, category_id: c7.id)
pc8 = ProductCategory.create(product_id: p7.id, category_id: c8.id)
pc9 = ProductCategory.create(product_id: p8.id, category_id: c9.id)
pc10 = ProductCategory.create(product_id: p9.id, category_id: c10.id)

#Sizes
s1 = Size.create(name: "32")
s2 = Size.create(name: "34")
s3 = Size.create(name: "36")
s4 = Size.create(name: "38")
s5 = Size.create(name: "40")
s6 = Size.create(name: "42")
s7 = Size.create(name: "One Size")

#ProductSizes
ps1 = ProductSize.create(product_id: p1.id, size_id: s1.id)
ps2 = ProductSize.create(product_id: p1.id, size_id: s2.id)
ps3 = ProductSize.create(product_id: p1.id, size_id: s3.id)
ps4 = ProductSize.create(product_id: p1.id, size_id: s4.id)
ps5 = ProductSize.create(product_id: p1.id, size_id: s5.id)
ps6 = ProductSize.create(product_id: p1.id, size_id: s6.id)
ps7 = ProductSize.create(product_id: p8.id, size_id: s7.id)
ps8 = ProductSize.create(product_id: p9.id, size_id: s7.id)
ps9 = ProductSize.create(product_id: p2.id, size_id: s1.id)
ps10 = ProductSize.create(product_id: p2.id, size_id: s2.id)
ps11 = ProductSize.create(product_id: p2.id, size_id: s3.id)
ps12 = ProductSize.create(product_id: p2.id, size_id: s4.id)
ps13 = ProductSize.create(product_id: p2.id, size_id: s5.id)
ps14 = ProductSize.create(product_id: p2.id, size_id: s6.id)











