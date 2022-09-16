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
#Lehenga
p1 = Product.create(
    title: 'Kiara', 
    description: 'Ivory set with intricate handwork all over the skirt and top and dupatta

    Product Information
    stone, Resham hand embroidery
    two-piece
    Top Length Approx 14"
    Bottom length 42"
    Silk
    Fully lined
    dry clean', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/Kiara-CHANIYA-CHOLI-Raas-The-Global-Desi-indian_clothing_usa-Briidal_lehenga_usa-lehenga_choli_usa_360x.jpg?v=1656716920",
    price: 1990,
    color: 'White, gold',
    isActive: true
)

p2 = Product.create(
    title: 'CC3626 Ayana Lehenga', 
    description: "The long sheer hand tie-dyed cape at the back of this blue velvet dress with stone, Resham hand embroidery and intricate jewel blouse and contrast dupatta will make you feel like a princess

    Product Information
    stone, Resham hand embroidery
    Dress length Approx 60 in
    velvet
    Fully lined
    dry clean
    ", 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/lehengacholiusa6K8A8882-Editchaniyacholiusa_360x.jpg?v=1649451922',
    price: 1790,
    color: 'Pink, multi',
    isActive: true
)

p3 = Product.create(
    title: 'CC3645 Riddhi Lehenga', 
    description: 'Silk saree with designer bllouse and matching petticoat', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/chaniyacholiforgarbaRAASHomeStudio-1170chaniyacholi2022_360x.jpg?v=1660603010',
    price: 350,
    color: 'Navy',
    isActive: true
)

p4 = Product.create(
    title: 'CC3600 Wine Lehenga', 
    description: "Deck yourself up in this beautiful lehenga choli from our runway collection, heavy embroidery work silk lehenga and  blouse with handwork embroidery.  Comes with a dupatta.", 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/CC3600-Wine-lehenga-CHANIYA-CHOLI-Raas-The-Global-Desi-chaniya_choli_USA-lehenga_choli_USA-bridal_lehenga_USA_360x.jpg?v=1658137448',
    price: 1280,
    color: 'Wine',
    isActive: true
)

p5 = Product.create(
    title: 'CC3528 Kimana Lehenga', 
    description: 'Off White floral silk 3 piece with floral cutout details on the neckline with mirror and bead work.

    Product Information
    Mirror embroidery
    3 piece
    Top length Aprox 14"
    Bottom lehgth 42"
    Silk
    Fully lined
    dry clean', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/Kimana-CHANIYA-CHOLI-Raas-The-Global-Desi-chaniya_choli_USA-lehenga_choli_USA-bridal_lehenga_USA_360x.jpg?v=1647375110',
    price: 990,
    color: 'White, gold',
    isActive: true
)

p6 = Product.create(
    title: 'CC3100', 
    description: "The stylish and elegant lehenga choli looks stunning and gorgeous with Trendy sequins works . This net lehenga  choli looks extremely attractive and an add charm to any Occasion. This lehenga choli set is  accompanied with net dupatta.", 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/CC3100-CHANIYA-CHOLI-lehenga_choli_USA-chaniya_choli_USA_360x.jpg?v=1643925230',
    price: 850,
    color: 'Seafoam',
    isActive: true
)

p7 = Product.create(
    title: 'CC3629 Off White Lehenga Choli', 
    description: 'Off White chikankari lehenga choli set comes mirror work blouse and lehenga with mirror work border and all over sequins detail. Lehenga choli comes with an embroidery dupatta

    Product Information
    Mirror embroidery
    3 piece
    Top length Aprox 14"
    Bottom lehgth 42”
    blouse Silk, lehenga and dupatta geoorgette
    Fully lined
    dry clean', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/lehengacholiusa6K8A8701-Editchaniyacholiusa_360x.jpg?v=1649436759',
    price: 790,
    color: 'Off white, gold',
    isActive: true
)

p8 = Product.create(
    title: 'CC3521 Shanaya Lehenga', 
    description: 'Give yourself a versatile look by wearing this lehenga choli. lehenga acomes with all over embroidery and georgette blouse with hand work and resham embroidery .  Comes with contrast  dupatta.', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/CC3521-SHANAYA-LEHENGA-CHANIYA-CHOLI-Raas-The-Global-Desi-chaniya_choli_USA-lehenga_choli_USA-bridal_lehenga_USA_360x.jpg?v=1647354829',
    price: 690,
    color: 'Orange, multi',
    isActive: true
)

p9 = Product.create(
    title: 'CC3725', 
    description: 'Dress in style wearing this white color designer lehenga choli set featuring thread embroidary  at the ham of the  lehenga , choli with  embroidery work,resham work , cutdana shines  in a lavish décor! This lehenga choli set is accompanied with  net dupatta.', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/CC3275-CHANIYA-CHOLI-lehenga_choli_USA-chaniya_choli_USA_360x.jpg?v=1643926094',
    price: 690,
    color: 'Black, white',
    isActive: true
)

p10 = Product.create(
    title: 'CC3520 Maroon Lehenga', 
    description: 'Deck yourself up in this beautiful lehenga choli, heavy embroidery work georgette chikankari lehenga and georgette blouse with handwork embroidery.  Comes with a dupatta. Dupatta weeving may differ.', 
    image: 'https://cdn.shopify.com/s/files/1/1135/5086/products/CC3520-Maroon-lehenga-CHANIYA-CHOLI-Raas-The-Global-Desi-chaniya_choli_USA-lehenga_choli_USA-bridal_lehenga_USA_360x.jpg?v=1647374848',
    price: 570,
    color: 'Maroon',
    isActive: true
)

#Chaniya Choli

p11 = Product.create(
    title: 'CC3663', 
    description: 'Full flare cotton and silk chaniya choli featuring miirror twork chaniya with hand  work and  hand-embroidered blouse with georgette dupatta with embroidery boorder. The accessories shown is only for display purpose.

    Unique design and combination make this Traditional ethnic Navratri Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_5cdb7563-2958-4280-9462-aa16f4f85dec_360x.jpg?v=1661924632",
    price: 350,
    color: 'Black, maroon',
    isActive: true
)

p12 = Product.create(
    title: 'CC3655', 
    description: 'Fabric: silk

    Occasion : navratri,party,wedding,bridesmaid
    
    Keep it classy with this full flare chaniya choli featuring a  plain silk chaniya and hand embroidery mirror work blouse and silk dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_8a6bd30c-042d-4f96-8673-185cb7f0e322_360x.jpg?v=1661834576",
    price: 225,
    color: 'Red',
    isActive: true
)

p13 = Product.create(
    title: 'CC3651', 
    description: 'Fabric: cotton, georgette

    Occasion : navratri,party
    
    Keep it classy with this full flare multicolor chaniya choli featuring a  cotton printed chaniya and hand embroidery mirror work blouse and georgette dupatta with mirror work. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_7673d682-d3f9-421f-9954-37cdd89bc00b_360x.jpg?v=1661830264",
    price: 170,
    color: 'Green, multi',
    isActive: true
)

p14 = Product.create(
    title: 'CC3637', 
    description: ' The multi-color full flare Chaniya( around25 to 30 meters) is paired with a embroidery blouse featuring colorful embellishments and embroidery. These accents match the details on the skirt and tie the overall outfit together.This chaniya choli comes with tie dye dupatta.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniyacholiforgarbaRAASHomeStudio-1911chaniyacholi2022_360x.jpg?v=1660238833",
    price: 350,
    color: 'Multi',
    isActive: true
)

p15 = Product.create(
    title: 'CC3630', 
    description: 'Fabric: silk,georgette

    Occasion : navratri,party
    
    Keep it classy with this full flare choli featuring a hand embroidered anchor work blouse and dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniya-choli-Raas-Chaniya-choli-USA-chaniya-choli-2022-chaniya-choli-online_23e8a03e-9b57-4750-961f-c8fc4f3e75dc_360x.jpg?v=1659255456",
    price: 390,
    color: 'White, rainbow',
    isActive: true
)

p16 = Product.create(
    title: 'CC3622', 
    description: 'Fabric: silk, georgette

    Occasion : wedding,party
    
    Keep it classy with this blue silk lehenga choli featuring a cut work patch work blouse and georgette sequins zari dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_ee530a01-9d52-4d0c-ba1e-fd8740b4ffae_360x.jpg?v=1659314965",
    price: 295,
    color: 'Blue',
    isActive: true
)

p17 = Product.create(
    title: 'CC3621', 
    description: 'Fabric: silk, georgette

    Occasion : wedding,party
    
    Keep it classy with this blue silk lehenga choli featuring a cut work patch work blouse and georgette sequins zari dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniya-choli-Raas-Chaniya-choli-USA-chaniya-choli-2022-chaniya-choli-online_56f1fc9a-83a1-44e6-bee9-a3a42a2c878d_360x.jpg?v=1659971180",
    price: 290,
    color: 'Black, multi',
    isActive: true
)

p18 = Product.create(
    title: 'CC3620', 
    description: 'Fabric : viscose, silk, net

    Occasion : navratri,party
    
    Keep it classy with this sharara suit featuring  long peplum style blouse with handwork embroidery and viscose chaniya  and net dupatta. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniyacholiforgarba7chaniyacholi2022_360x.jpg?v=1659255571",
    price: 250,
    color: 'Blue, red',
    isActive: true
)

p19 = Product.create(
    title: 'CC3619 Lehenga Set', 
    description: 'Fabric : bandhani, chanderi silk, georgette

    Occasion : navratri,party
    
    Keep it classy with this bandhani lehenga choli featuring  bandhani peplum style blouse with handwork embroidery and chanderi cotton chaniya  and net dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniya-choli-Raas-Chaniya-choli-USA-chaniya-choli-2022-chaniya-choli-online_360x.jpg?v=1659255410",
    price: 250,
    color: 'Pink, red',
    isActive: true
)

p20 = Product.create(
    title: 'CC3641', 
    description: 'Fabric: cotton, georgette

    Occasion : navratri,party
    
    Keep it classy with this full flare chaniya choli featuring a  block printed lehenga and hand embroidery blouse and georgette dupatta. 
    
    Unique design and combination make this Traditional ethnic Chaniya Choli outstanding.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniiyacholiusaIMG_6208chaniyacholiforgarba_360x.jpg?v=1660252910",
    price: 250,
    color: 'Green, multi',
    isActive: true
)

# Dresses

p21 = Product.create(
    title: 'AG1905 White Dress', 
    description: 'White gown dress torso wiith mirror work,anchor work.This stunner  gown dress Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful. Comes with contrast dupatta. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/chaniiyacholiusa1chaniyacholiforgarba_360x.jpg?v=1662083700",
    price: 350,
    color: 'White, multi',
    isActive: true
)
p22 = Product.create(
    title: 'AG1903 Yellow Dress', 
    description: 'Multi color, this stunner flaunts a multi color  gown dress Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_e10d6a6f-cfee-423d-a3b3-578e85faad29_360x.jpg?v=1662038560",
    price: 290,
    color: 'Orange',
    isActive: true
)
p23 = Product.create(
    title: 'AG1902 Diana Dress', 
    description: 'This stunner flaunts a printed silk gown dress with hand embroidery torso Perfect for functions, festivals, wedding functions or engagement ceremonies. Shoulder bow is removable.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_04f9d1d9-7755-4b0b-8a53-c2ae7aa240cc_360x.png?v=1660782697",
    price: 250,
    color: 'Green',
    isActive: true
)
p24 = Product.create(
    title: 'AG1898 Ruba Dress', 
    description: 'This stunner flaunts a printed silk gown dress Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful.  ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/IndiandressesusaIMG_6064longdress_360x.jpg?v=1660143494",
    price: 199,
    color: 'Blue, multi',
    isActive: true
)
p25 = Product.create(
    title: 'AG1897 Ceres Dress', 
    description: 'This stunner flaunts a green color silk gown dress with golden peacock weaving Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful.
    ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/IndiandressesusaIMG_6056longdresswithslit_360x.jpg?v=1660142307",
    price: 225,
    color: 'Green',
    isActive: true
)
p26 = Product.create(
    title: 'Tara Dress With Slit', 
    description: 'The long sheer hand tie dyed cape at the back of this sky blue georgette dress with all over threadwork and intricate jewel neck line will make you feel like a character out a fairytale. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/Tara-dress-with-slit-ANARKALI-GOWN-chaniiya_choli-chaniiya_choli_USA-chaniiya_choli_online-indian-dresses-near-me-indian-gown-gown-dress-indian-outfits_360x.jpg?v=1655914748",
    price: 290,
    color: 'Cream',
    isActive: true
)
p27 = Product.create(
    title: 'Amber Dress', 
    description: 'The long sheer hand tie dyed cape at the back of this sky blue georgette dress with all over threadwork and intricate jewel neck line will make you feel like a character out a fairytale.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/Amber-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_store_usa-indian_dresses_usa_360x.jpg?v=1656302917",
    price: 450,
    color: 'Blue',
    isActive: true
)
p28 = Product.create(
    title: 'AG1890 White Dress', 
    description: 'Fabricated in white color, this stunner flaunts a embroidery neckline Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful. Comes with matching banarasi dupatta. Accessories shown is only display purpose.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/dresses6K8A0009indiandressesusa_360x.jpg?v=1651456569",
    price: 290,
    color: 'White, red',
    isActive: true
)
p29 = Product.create(
    title: 'AG1880 Dress With Slit', 
    description: 'Be the dazzling diva clad in this fantastic georgette gown.

    Fabricated in soft color, this stunner flaunts front slit Perfect for functions, festivals, wedding functions, bridesmaid or engagement ceremonies. Pair this dress with accessories to make your look more beautiful.  ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/product_type-indian_clothing_usa-bridesmaid_dresses_usa-indian_dresses_usa_360x.jpg?v=1656908513",
    price: 190,
    color: 'Pink',
    isActive: true
)
p30 = Product.create(
    title: 'AG1811', 
    description: 'Fabricated in black  color, this stunner flaunts a high neckline Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful.  comes with matching banarasi all over embroidery dupatta. Accessories shown is only display purpose.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1811-ANARKALI-GOWN-indian_dresses_USA-indian_outfits_USA_360x.jpg?v=1643928802",
    price: 290,
    color: 'Black',
    isActive: true
)

# Gowns

p31 = Product.create(
    title: 'AG1886 Velvet Gown With Slit', 
    description: 'Be the dazzling diva clad in this fantastic velvet gown with mirror work on neckline.

    Fabricated in soft color, this stunner flaunts Perfect for functions, festivals, wedding functions, bridesmaid or engagement ceremonies. Pair this dress with accessories to make your look more beautiful. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1886-velvet-gown-with-slit-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_chicago-indian_dresses_usa_540x.jpg?v=1656906563",
    price: 190,
    color: 'Teal',
    isActive: true
)
p32 = Product.create(
    title: 'AG1885', 
    description: 'Be the dazzling diva clad in this fantastic velvet gown with mirror work on neckline.

    Fabricated in soft color, this stunner flaunts Perfect for functions, festivals, wedding functions, bridesmaid or engagement ceremonies. Pair this dress with accessories to make your look more beautiful. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1885-velvet-gown-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_chicago-indian_dresses_usa_540x.jpg?v=1656906770",
    price: 190,
    color: 'Teal',
    isActive: true
)
p33 = Product.create(
    title: 'AG1802', 
    description: 'Experience the magnificence of exquisite  gown Crafted from the finest quality fabric with artisanal details . 

    The gown dress flare out gently from the waist. Accessories shown is only display purpose.
    
    Dress is perfect for weddings, festivals, family celebrations, and all other big and small events.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1802-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_chicago-indian_dresses_usa_360x.jpg?v=1656907277",
    price: 320,
    color: 'Pink',
    isActive: true
)
p34 = Product.create(
    title: 'AG1811', 
    description: 'Experience the magnificence of exquisite  maxi dress Crafted from the finest quality viscose - rayon fabric with artisanal details . Bold prints and motifs in unconventional and ultra-chic color combinations span the length of the maxi dress.

    The tiered maxi dress flare out gently from the waist, with opulent layers adding festive flair to the silhouette. Contemporary sleeveless neckline mirror work details step up the wow factor of the ensemble. Splendid dupatta in net accompany the  outfit. Accessories shown is only display purpose.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1762-ANARKALI-GOWN-indian_dresses_USA-indian_outfits_USA_360x.jpg?v=1643928785",
    price: 270,
    color: 'Navy, multi',
    isActive: true
)
p35 = Product.create(
    title: 'AG1811', 
    description: 'Experience the magnificence of exquisite gown dress Crafted from the finest quality fabric with artisanal details .

    The gown dress flare out gently from the waist. Accessories shown is only display purpose.
    
    Dress is perfect for weddings, festivals, family celebrations, and all other big and small events.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1803-ANARKALI-GOWN-indian_dresses_USA-indian_outfits_USA_360x.jpg?v=1643928767",
    price: 350,
    color: 'Navy, multi',
    isActive: true
)
p36 = Product.create(
    title: 'AG1765', 
    description: 'Experience the magnificence of exquisite  convertible gown Crafted from the finest quality fabric with artisanal details . You can remove strap if you wish.

    The convertible gown dress flare out gently from the waist. Accessories shown is only display purpose.
    
    Dress is perfect for weddings, festivals, family celebrations, and all other big and small events.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1765-ANARKALI-GOWN-indian_dresses_USA-indian_outfits_USA_360x.jpg?v=1643928758",
    price: 299,
    color: 'Navy',
    isActive: true
)
p37 = Product.create(
    title: 'AG1764A', 
    description: 'Experience the magnificence of exquisite eyelet maxi dress Crafted from the finest quality fabric with artisanal details . Tie dye prints and eyelet embroidery in unconventional and ultra-chic color combinations span the length of the maxi dress.

    The maxi dress flare out gently from the waist, with opulent layers adding festive flair to the silhouette. Contemporary sleeveless neckline with embroidery work details step up the wow factor of the ensemble. Splendid dupatta in net accompany the  outfit. Accessories shown is only display purpose.
    
    Dress is perfect for weddings, festivals, family celebrations, and all other big and small events.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1764A-ANARKALI-GOWN-indian_clothing_usa-indian_clothing_chicago-indian_dresses_usa_360x.jpg?v=1656907461",
    price: 250,
    color: 'Pink, multi',
    isActive: true
)
p38 = Product.create(
    title: 'AG1753', 
    description: 'Be the dazzling diva clad in this fantastic metallic sequins gown with slit.Fabricated in black color, this stunner flaunts a deep neckline Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair this Indian dresses with  accessories to make your look more beautiful.  Accessories shown is only display purpose.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1753-ANARKALI-GOWN-indian_dresses_USA-indian_outfits_USA_360x.jpg?v=1643928704",
    price: 320,
    color: 'Multi',
    isActive: true
)
p39 = Product.create(
    title: 'AG1755', 
    description: 'From time immemorial, blue has been a favorite color for women.Whether it is because of the intolerable heat or the innate ability of the color to stand out, blue outfits have always been popular. Since this color never looks out dated, blue dresses and gown are constantly at the forefront of the fashion scene. Be the dazzling diva clad in this fantastic blue silk gown. Perfect for functions, festivals, wedding functions or engagement ceremonies. Pair it with traditional accessories to make your look more beautiful. Accessories shown is only display purpose.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/indian-clothing-store-USA-Indian-clothing-USA-Indian-clothes-USA_360x.jpg?v=1656257722",
    price: 490,
    color: 'Multi',
    isActive: true
)
p40 = Product.create(
    title: 'AG1640', 
    description: 'Fabric : silk brocade
    Occasion : Wedding, party, reception
    
    work: rasham, thread
    
    From time immemorial, white has been a favorite color for Indian women.Whether it is because of the intolerable heat or the innate ability of the color to stand out, white ethnic outfits have always been popular. Since this color never looks dated, white dresses and salwar suits are constantly at the forefront of the Indian fashion scene. Be the dazzling diva clad in this fantastic white silk gown. Perfect for traditional functions, festivals, wedding functions or engagement ceremonies. Pair it with traditional accessories to make your look more beautiful. ', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/AG1640-ANARKALI-GOWN-Indian_dresses_usa-Indian_outfits_usa-Indian_dresses_near_me_360x.jpg?v=1656257104",
    price: 490,
    color: 'White multi',
    isActive: true
)

# Saree

p41 = Product.create(
    title: 'SR1100', 
    description: 'HAnita I Silk saree with handwork and designer Handwork raw silk blouse and matching petticoat.

    Saree comes with stitched designer blouse. Fall edging is done. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/image_7437d40b-ca54-4a48-bed8-aa1d0a6cb0cf_360x.jpg?v=1650152360",
    price: 490,
    color: 'White, gold',
    isActive: true
)
p42 = Product.create(
    title: 'SR1111', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree47sareewithblouse_360x.jpg?v=1631584800",
    price: 490,
    color: 'Orange',
    isActive: true
)
p43 = Product.create(
    title: 'SR1108', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree41sareewithblouse_360x.jpg?v=1631584554",
    price: 490,
    color: 'Navy, multi',
    isActive: true
)
p44 = Product.create(
    title: 'SR1104', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree29sareewithblouse_360x.jpg?v=1631583124",
    price: 450,
    color: 'Orange',
    isActive: true
)
p45 = Product.create(
    title: 'SR1099', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree10sareewithblouse_360x.jpg?v=1631582128",
    price: 350,
    color: 'Navy',
    isActive: true
)
p46 = Product.create(
    title: 'SR1097', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse . Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree4sareewithblouse_360x.jpg?v=1631581907",
    price: 350,
    color: 'Red, black, multi',
    isActive: true
)
p47 = Product.create(
    title: 'SR1098', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse . Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree8sareewithblouse_360x.jpg?v=1631582054",
    price: 390,
    color: 'Multi',
    isActive: true
)
p48 = Product.create(
    title: 'SR1110', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree17sareewithblouse_360x.jpg?v=1631582344",
    price: 399,
    color: 'Green',
    isActive: true
)
p49 = Product.create(
    title: 'SR1103', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree28sareewithblouse_360x.jpg?v=1631582921",
    price: 450,
    color: 'Red',
    isActive: true
)
p50 = Product.create(
    title: 'SR1109A', 
    description: 'Silk saree with designer blouse and matching petticoat.

    Saree comes with stitched designer blouse. Saree is ready to wear.', 
    image: "https://cdn.shopify.com/s/files/1/1135/5086/products/saree13sareewithblouse_360x.jpg?v=1631582229",
    price: 350,
    color: 'Navy',
    isActive: true
)





#ProductCategory
pc1 = ProductCategory.create(product_id: p1.id, category_id: c1.id)
pc2 = ProductCategory.create(product_id: p2.id, category_id: c1.id)
pc3 = ProductCategory.create(product_id: p3.id, category_id: c1.id)
pc4 = ProductCategory.create(product_id: p4.id, category_id: c1.id)
pc5 = ProductCategory.create(product_id: p5.id, category_id: c1.id)
pc6 = ProductCategory.create(product_id: p6.id, category_id: c1.id)
pc7 = ProductCategory.create(product_id: p7.id, category_id: c1.id)
pc8 = ProductCategory.create(product_id: p8.id, category_id: c1.id)
pc9 = ProductCategory.create(product_id: p9.id, category_id: c1.id)
pc10 = ProductCategory.create(product_id: p10.id, category_id: c1.id)

pc11 = ProductCategory.create(product_id: p11.id, category_id: c2.id)
pc12 = ProductCategory.create(product_id: p12.id, category_id: c2.id)
pc13 = ProductCategory.create(product_id: p13.id, category_id: c2.id)
pc14 = ProductCategory.create(product_id: p14.id, category_id: c2.id)
pc15 = ProductCategory.create(product_id: p15.id, category_id: c2.id)
pc16 = ProductCategory.create(product_id: p16.id, category_id: c2.id)
pc17 = ProductCategory.create(product_id: p17.id, category_id: c2.id)
pc18 = ProductCategory.create(product_id: p18.id, category_id: c2.id)
pc19 = ProductCategory.create(product_id: p19.id, category_id: c2.id)
pc20 = ProductCategory.create(product_id: p20.id, category_id: c2.id)

pc21 = ProductCategory.create(product_id: p21.id, category_id: c3.id)
pc22 = ProductCategory.create(product_id: p22.id, category_id: c3.id)
pc23 = ProductCategory.create(product_id: p23.id, category_id: c3.id)
pc24 = ProductCategory.create(product_id: p24.id, category_id: c3.id)
pc25 = ProductCategory.create(product_id: p25.id, category_id: c3.id)
pc26 = ProductCategory.create(product_id: p26.id, category_id: c3.id)
pc27 = ProductCategory.create(product_id: p27.id, category_id: c3.id)
pc28 = ProductCategory.create(product_id: p28.id, category_id: c3.id)
pc29 = ProductCategory.create(product_id: p29.id, category_id: c3.id)
pc30 = ProductCategory.create(product_id: p20.id, category_id: c3.id)

pc31 = ProductCategory.create(product_id: p31.id, category_id: c4.id)
pc32 = ProductCategory.create(product_id: p32.id, category_id: c4.id)
pc33 = ProductCategory.create(product_id: p33.id, category_id: c4.id)
pc34 = ProductCategory.create(product_id: p34.id, category_id: c4.id)
pc35 = ProductCategory.create(product_id: p35.id, category_id: c4.id)
pc36 = ProductCategory.create(product_id: p36.id, category_id: c4.id)
pc37 = ProductCategory.create(product_id: p37.id, category_id: c4.id)
pc38 = ProductCategory.create(product_id: p38.id, category_id: c4.id)
pc39 = ProductCategory.create(product_id: p39.id, category_id: c4.id)
pc40 = ProductCategory.create(product_id: p40.id, category_id: c4.id)

pc41 = ProductCategory.create(product_id: p41.id, category_id: c5.id)
pc42 = ProductCategory.create(product_id: p42.id, category_id: c5.id)
pc43 = ProductCategory.create(product_id: p43.id, category_id: c5.id)
pc44 = ProductCategory.create(product_id: p44.id, category_id: c5.id)
pc45 = ProductCategory.create(product_id: p45.id, category_id: c5.id)
pc46 = ProductCategory.create(product_id: p46.id, category_id: c5.id)
pc47 = ProductCategory.create(product_id: p47.id, category_id: c5.id)
pc48 = ProductCategory.create(product_id: p48.id, category_id: c5.id)
pc49 = ProductCategory.create(product_id: p49.id, category_id: c5.id)
pc50 = ProductCategory.create(product_id: p50.id, category_id: c5.id)

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











