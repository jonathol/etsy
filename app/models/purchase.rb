# == Schema Information
#
# Table name: purchases
#
#  id         :integer          not null, primary key
#  quantity   :integer          not null
#  cart_id    :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Purchase < ActiveRecord::Base
  belongs_to :cart
  belongs_to :listing
end
