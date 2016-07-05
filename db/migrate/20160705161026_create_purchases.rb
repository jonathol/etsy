class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.integer :quantity, null: false
      t.integer :cart_id, null: false
      t.integer :listing_id, null: false
      t.timestamps null: false
    end
  end
end
