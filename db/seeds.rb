User.delete_all

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
