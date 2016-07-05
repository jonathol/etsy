# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160705161026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "carts", ["user_id"], name: "index_carts_on_user_id", using: :btree

  create_table "listings", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "img_url",     null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "ingredients", null: false
    t.text     "description"
    t.float    "price",       null: false
  end

  add_index "listings", ["user_id"], name: "index_listings_on_user_id", using: :btree

  create_table "purchases", force: :cascade do |t|
    t.integer  "quantity",   null: false
    t.integer  "cart_id",    null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                                                          null: false
    t.string   "password_digest",                                                                                                                                                   null: false
    t.string   "session_token",                                                                                                                                                     null: false
    t.datetime "created_at",                                                                                                                                                        null: false
    t.datetime "updated_at",                                                                                                                                                        null: false
    t.string   "firstname"
    t.string   "lastname"
    t.string   "img_url",         default: "https://res.cloudinary.com/jonathol/image/upload/v1467319541/account_friend_human_man_member_person_profile_user_users-128_qzjgxd.png"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
