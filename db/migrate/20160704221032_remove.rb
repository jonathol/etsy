class Remove < ActiveRecord::Migration
  def change
    remove_column :listings, :nutrition
  end
end
