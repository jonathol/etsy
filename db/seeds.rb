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
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467397038/RpO2L3s_vq5mwr.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff"
)

Listing.create!(
  name: "Fried Salmon and Mango Salad",
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467397461/wQk6tcw_umpcba.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff"
)

Listing.create!(
  name: "Congee and Sides",
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405720/Syu3mGO_lvvfuy.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff"
)

Listing.create!(
  name: "Bulgogi & Kalbi Pad Kee Mao",
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405770/E0Bw2Cn_nw9ya7.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff"
)

Listing.create!(
  name: "Chicken Korma",
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467405880/5e30792c05ce4b42956dcca7027cd805_npyphp.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff"
)

Listing.create!(
  name: "Pulled Pork Waffel",
  nutrition: "nutrition stuff",
  img_url: "https://res.cloudinary.com/jonathol/image/upload/v1467406680/0BwFxC6jdif2rtMHKUrGxCZffkzjAmqUeW2KjW6UlS4_cfgln2.jpg",
  user_id: 2,
  ingredients: "ingredients stuff",
  description: "descriptive stuff asfiasjfoisagoiahgiohaohgoihawio;rghioawehioghaioh ioahfoisdhjfiaosgijoawjiojag"
)
