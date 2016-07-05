# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  img_url     :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  ingredients :text             not null
#  description :text
#  price       :float            not null
#

class Listing < ActiveRecord::Base
  validates :name, :ingredients, :img_url, :user_id, presence: true

  belongs_to :user
  has_many :purchases
  has_many :carts,
    through: :purchases,
    source: :cart
end
