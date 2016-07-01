class EditUserImgUrlSize < ActiveRecord::Migration
  remove_column :users, :img_url

  add_column :users, :img_url, :string, :default => "http://res.cloudinary.com/jonathol/image/upload/c_scale,w_30/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
end
