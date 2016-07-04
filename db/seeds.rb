User.delete_all
Listing.delete_all

User.create!(
  firstname: "",
  lastname: "",
  username: "Guest",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
)

User.create!(
  firstname: "Jonathon",
  lastname: "Lin",
  username: "jonathol",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467319060/1452407_618193968245200_1783892615_n_pfjrdl.jpg"
)

User.create!(
  firstname: "NoLastName",
  lastname: "",
  username: "nolastname",
  password: "123456",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
)


Listing.create!(
  name: "Guac n Cheese",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467397038/RpO2L3s_vq5mwr.jpg",
  user_id: 2,
  ingredients: "elbow macaroni, garlic, avocado, lime juice, fresh cilantro, Salt, pepper, butter, flour, milk,Pepper Jack cheese",
  description: "One of my favorite go-to comfort foods.",
  price: 1.00
)

Listing.create!(
  name: "Fried Salmon and Mango Salad",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467397461/wQk6tcw_umpcba.jpg",
  user_id: 2,
  ingredients: "salmon, carrots, jicama, cucumber, under ripe mango, bell peppers, red onion, thai basil, fish sauce, sesame oil, vegetable oil, salt, white pepper, chili oil, garlic, ginger, sugar",
  description: "My mama's fried salmon and mango salad!",
  price: 1.00
)

Listing.create!(
  name: "Congee and Sides",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405720/Syu3mGO_lvvfuy.jpg",
  user_id: 2,
  ingredients: "rice, water, eggs, fermented tofu, swordfish floss,fried onions, salted mustard greens, kimchi, chilli bamboo, sesame seeds, bonito flakes, seaweed powder, salt",
  description: "Made congee in the rice cooker, with a variety of sides. Scrambled eggs, fermented tofu, swordfish floss, fried onions, salted mustard greens, kimchi,chilli bamboo, and home-made furikake on the rice (sesame seeds, bonito flakes, seaweed powder, salt).",
  price: 1.00
)

Listing.create!(
  name: "Bulgogi & Kalbi Pad Kee Mao",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405770/E0Bw2Cn_nw9ya7.jpg",
  user_id: 2,
  ingredients: "Chinese broccoli, fresh made flat noodles, marinated bulgogi and kalbi, birds eye chilies, Thai basil, garlic, onion, egg, oyster sauce, golden mountain sauce, light soy, and palm sugar, pepper.",
  description: "Korean-Thai inspired bulgogi & kalbi pad kee mao",
  price: 1.00
)

Listing.create!(
  name: "Chicken Korma",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405880/5e30792c05ce4b42956dcca7027cd805_npyphp.jpg",
  user_id: 2,
  ingredients: "brown onions, ginger, garlic in ghee, bloom spices, chicken, water, parsely, chickpeas, spinach",
  description: "Chicken korma/chickpeas/spinach",
  price: 1.01
)

Listing.create!(
  name: "Pulled Pork Waffle",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467406680/0BwFxC6jdif2rtMHKUrGxCZffkzjAmqUeW2KjW6UlS4_cfgln2.jpg",
  user_id: 2,
  ingredients: "Maple Pork: California butter, boneless pork shoulder or sirloin, pure maple syrup, cider vinegar, chicken stock, dried rosemary leaves, salt, garlic, California crème fraiche, fresh chives or green onion tops; Cornmeal Waffles: flour, cornmeal, baking powder, salt, California buttermilk, melted California butter, pure maple syrup, cooked maple bacon",
  description: "Pulled Pork Waffle",
  price: 1.00
)

Listing.create!(
  name: "Deep Fried Jalepeno Popper Deviled Eggs",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467672830/QDY1OJ9dZODe10cdAeOcuekDrxzEgEqa3GLeYP5Cl5M_ltdeqq.jpg",
  user_id: 2,
  ingredients: "pancetta, cheddar, eggs, mayo, cream cheese, jalapeno, green onions, salt, pepper, panko, flour, egg",
  description: "Deep Fried Jalepeno Popper Deviled Eggs",
  price: 1.00
)

Listing.create!(
  name: "Bacon, scallion, jalapeno Mac and Cheese",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467673282/4bpgNAT_kf5whj.jpg",
  user_id: 2,
  ingredients: "bacon, scallion, jalapeno, cheddar, parmesan, milk, butter, elbow macaroni",
  description: "Cheesy meal for bbqs",
  price: 1.51

)
