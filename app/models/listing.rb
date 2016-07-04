class Listing < ActiveRecord::Base
  validates :name, :ingredients, :img_url, :user_id, presence: true

  belongs_to :user
end
