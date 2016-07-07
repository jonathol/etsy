class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :comment
      t.integer :score, null: false
      t.timestamps null: false
    end
  end
end
