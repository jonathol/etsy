User.delete_all
Listing.delete_all
Cart.delete_all
Review.delete_all

review = {
  1 => [1, "terrible"],
  2 => [5, "Amazing flavor and colors!"],
  3 => [3, "It was okay"],
  4 => [4, "Loved the combination of flavors"],
  5 => [3, "Yummy!"],
  6 => [1, "It was undercooked"],
  7 => [1, "food was overcooked"],
  8 => [2, "Tasted good but serving size was too small"],
  9 => [1, "Shipping was slow, food did not taste fresh"],
  10 => [4, "I was surpised by how good this tasted!"],
  11 => [5, "Would order again!"],
  12 => [2, "A little soggy from being frozen. Would not order again."],
  13 => [3, "mediocre"],
  14 => [1, "Everything was stale"],
  15 => [1, "WHY WAS MY FOOD BURNT!"],
  16 => [2, "I was dissapointed."],
  17 => [2, "I could do better."],
  18 => [2, "Tasted bland."],
  19 => [2, "Way too much salt"],
  20 => [3, "Neither good nor bad"],
  21 => [3, "meh"],
  22 => [3, "A little more salt and this would taste amazing!"],
  23 => [4, "Excelent experience!"],
  24 => [4, "Tasted amazing!"],
  25 => [4, "I love the plating"],
  26 => [4, "Exceptional!"],
  27 => [5, "5/5 would order again!"],
  28 => [5, "Everything from texture to taste was beyond expectations!"],
  29 => [5, "Beautiful presentation!"],
  30 => [5, "Tasty!"],
}


User.create!(
  firstname: "",
  lastname: "",
  username: "Guest",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/e_colorize,co_rgb:ffffff/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
)

User.create!(
  firstname: "Jonathon",
  lastname: "Lin",
  username: "jonathol",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467319060/1452407_618193968245200_1783892615_n_pfjrdl.jpg"
)

User.create!(
  firstname: "",
  lastname: "",
  username: "kevMcCall",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/e_colorize,co_rgb:DF744A/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
)

Cart.create!(
  user_id: 1
)

Cart.create!(
  user_id: 2
)

Cart.create!(
  user_id: 3
)

Listing.create!(
  name: "Guac n Cheese",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467397038/RpO2L3s_vq5mwr.jpg",
  user_id: 2,
  ingredients: "elbow macaroni, garlic, avocado, lime juice, fresh cilantro, Salt, pepper, butter, flour, milk, Pepper Jack cheese",
  description: "One of my favorite go-to comfort foods. Serves 3.",
  price: 20.00
)

Listing.create!(
  name: "Fried Salmon and Mango Salad",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467397461/wQk6tcw_umpcba.jpg",
  user_id: 2,
  ingredients: "salmon, carrots, jicama, cucumber, under ripe mango, bell peppers, red onion, thai basil, fish sauce, sesame oil, vegetable oil, salt, white pepper, chili oil, garlic, ginger, sugar",
  description: "My mama's fried salmon and mango salad! All ingredients are organic. Serving size: 2.",
  price: 10.00
)

Listing.create!(
  name: "Congee and Sides",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467405720/Syu3mGO_lvvfuy.jpg",
  user_id: 2,
  ingredients: "rice, water, eggs, fermented tofu, swordfish floss,fried onions, salted mustard greens, kimchi, chilli bamboo, sesame seeds, bonito flakes, seaweed powder, salt",
  description: "Made congee in the rice cooker, with a variety of sides. Scrambled eggs, fermented tofu, swordfish floss, fried onions, salted mustard greens, kimchi,chilli bamboo, and home-made furikake on the rice (sesame seeds, bonito flakes, seaweed powder, salt).",
  price: 5.00
)

Listing.create!(
  name: "Bulgogi & Kalbi Pad Kee Mao",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467405770/E0Bw2Cn_nw9ya7.jpg",
  user_id: 2,
  ingredients: "Chinese broccoli, fresh made flat noodles, marinated bulgogi and kalbi, birds eye chilies, Thai basil, garlic, onion, egg, oyster sauce, golden mountain sauce, light soy, and palm sugar, pepper.",
  description: "Enough for 1 serving. A Korean-Thai inspired bulgogi & kalbi pad kee mao.",
  price: 13.00
)

Listing.create!(
  name: "Chicken Korma",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467405880/5e30792c05ce4b42956dcca7027cd805_npyphp.jpg",
  user_id: 2,
  ingredients: "brown onions, ginger, garlic in ghee, bloom spices, chicken, water, parsely, chickpeas, spinach",
  description: "Chicken korma/chickpeas/spinach. Consume with rice or naan. Serving size - 2.",
  price: 24.00
)

Listing.create!(
  name: "Pulled Pork Waffle",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467406680/0BwFxC6jdif2rtMHKUrGxCZffkzjAmqUeW2KjW6UlS4_cfgln2.jpg",
  user_id: 2,
  ingredients: "Maple Pork: California butter, boneless pork shoulder or sirloin, pure maple syrup, cider vinegar, chicken stock, dried rosemary leaves, salt, garlic, California crème fraiche, fresh chives or green onion tops; Cornmeal Waffles: flour, cornmeal, baking powder, salt, California buttermilk, melted California butter, pure maple syrup, cooked maple bacon",
  description: "Maple pulled pork in a cornmeal waffle bun. Sides not included.",
  price: 6.00
)

Listing.create!(
  name: "Deep Fried Jalepeno Popper Deviled Eggs",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467672830/QDY1OJ9dZODe10cdAeOcuekDrxzEgEqa3GLeYP5Cl5M_ltdeqq.jpg",
  user_id: 2,
  ingredients: "pancetta, cheddar, eggs, mayo, cream cheese, jalapeno, green onions, salt, pepper, panko, flour, egg",
  description: "Deep Fried Jalepeno Popper Deviled Eggs perfect for a late night snack. 12 per order.",
  price: 8.00
)

Listing.create!(
  name: "Bacon, scallion, jalapeno Mac and Cheese",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1467673282/4bpgNAT_kf5whj.jpg",
  user_id: 2,
  ingredients: "bacon, scallion, jalapeno, cheddar, parmesan, milk, butter, elbow macaroni",
  description: "Spicy, cheesy meal for bbqs. Serving per order- 5",
  price: 23.00
)

Listing.create!(
  name: "kevMcCall's Shakshukah",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1469664014/Shakshuka-Close-640x480_veowgf.jpg",
  user_id: 3,
  ingredients: "
    1 tbsp olive oil,
    1/2 medium brown or white onion, peeled and diced,
    1 clove garlic, minced,
    1 medium green or red bell pepper, chopped,
    4 cups ripe diced tomatoes, or 2 cans (14 oz. each) diced tomatoes,
    2 tbsp tomato paste,
    1 tsp chili powder (mild),
    1 tsp cumin,
    1 tsp paprika,
    Pinch of cayenne pepper (or more to taste-- spicy!),
    Pinch of sugar (optional, to taste),
    Salt and pepper to taste,
    5-6 eggs,
    1/2 tbsp fresh chopped parsley (optional, for garnish),
  ",
  description: "Shakshukah is a dish of eggs poached in a sauce of tomatoes, chili peppers, and onions, often spiced with cumin. Serves 1.",
  price: 10.00
)

Listing.create!(
  name: "Coquille Saint-Jacques",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206233/jo2z0idrkrfy_prclf7.jpg",
  user_id: 2,
  ingredients: "Scallop",
  description: "Classic Gratinéed Scallops",
  price: 10.00
)

Listing.create!(
  name: "Nutella Mousse",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206004/OG4x2WG_h8mh42.jpg",
  user_id: 2,
  ingredients: "whipping cream, nutella",
  description: "2 ingredient nutella mousse",
  price: 5.00
)

Listing.create!(
  name: "Chocolate & Raspberry Cake",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206029/NJPkAEu_tpyxbo.jpg",
  user_id: 2,
  ingredients: "flour, egg, sugar, milk, chocolate, raspberry",
  description: "Beautiful chocolate and raspberry cake for Valentine's day",
  price: 15.00
)

Listing.create!(
  name: "Chickpea Avocado Sandwich",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206035/vgvtOU4_aub8os.jpg",
  user_id: 2,
  ingredients: "avocado, chickpea, cranberries, lemon",
  description: "Epic vegetarian sandwich",
  price: 8.00
)

Listing.create!(
  name: "Chicken and Rice",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1488409280/54f6719326e82_-_turmeric-chicken-rice-recipe-fw0714-bmz3q9-s2_t76mzt.jpg",
  user_id: 2,
  ingredients: "chicken, bell peppers, rice",
  description: "Chicken and rice bowl",
  price: 10.00
)

Listing.create!(
  name: "Valentine's Day Eggs Benedict",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206232/Ewe2WH3nYenZ6DJlBIqhc_ggX4xUbhMZWkYOCVpGVb0_m29q7d.jpg",
  user_id: 2,
  ingredients: "eggs, bacon, bread",
  description: "Valentine's day eggs benedict",
  price: 13.00
)

Listing.create!(
  name: "Thai Duck Curry",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206270/Capture_ki2zqp.png",
  user_id: 2,
  ingredients: "duck, basil",
  description: "Thai duck curry",
  price: 15.00
)

Listing.create!(
  name: "Zucchini Bread",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206158/gPjNqHi_lgzyd0.jpg",
  user_id: 2,
  ingredients: "flour, cinnamon, nutmeg, zucchini, sugar",
  description: "Zucchini Bread",
  price: 8.00
)

Listing.create!(
  name: "Bacon Wrapped Chicken Lollipops",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206165/1FqDQfO_wghlrp.jpg",
  user_id: 2,
  ingredients: "bacon, chicken",
  description: "Bacon wrapped chicken lollipops with a spice rub and glaze and smoked over cherry wood.",
  price: 14.00
)

Listing.create!(
  name: "Parmesan Meatloaf with Baked Potatoes",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206181/qHipVpA_t0ibn4.jpg",
  user_id: 2,
  ingredients: "parmesan, pork, potatoes, eggs",
  description: "Parmesan meatloaf with baked potatoes",
  price: 15.00
)

Listing.create!(
  name: "English Breakfast",
  img_url: "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_400/v1487206185/AIpbWhB_tsb9yb.jpg",
  user_id: 2,
  ingredients: "beans, bangers, bacon, toast, eggs, vegs",
  description: "The full english fry-up.",
  price: 23.00
)

200.times do
  val = rand(1..30)
  Review.create!(
    user_id: 1,
    listing_id: rand(1..20),
    comment: review[val][1],
    score: review[val][0]
  )
end
