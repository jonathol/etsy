class EditListing < ActiveRecord::Migration
  def change
    remove_column :listings, :ingerdients

    add_column :listings, :ingredients, :text, null: false
  end
end
