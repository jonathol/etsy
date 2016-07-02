class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.text :nutrition, null: false
      t.text :ingerdients, null: false
      t.string :img_url, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :listings, :user_id
  end
end
