class EditImgUrl < ActiveRecord::Migration
  def change
    remove_column :users, :img_url

    add_column :users, :img_url, :string, :default => "https://res.cloudinary.com/jonathol/image/upload/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
  end
end
