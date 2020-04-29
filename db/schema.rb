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

ActiveRecord::Schema.define(version: 2020_04_29_185623) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.integer "number_of_party", null: false
    t.datetime "time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["time"], name: "index_reservations_on_time"
    t.index ["user_id", "time"], name: "index_reservations_on_user_id_and_time", unique: true
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer "chef_id", null: false
    t.string "name", null: false
    t.string "cuisine"
    t.text "address", null: false
    t.string "country", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.integer "zip", null: false
    t.integer "capacity", null: false
    t.integer "price_range"
    t.text "overview"
    t.text "website_url"
    t.string "phone_number"
    t.datetime "open_hour"
    t.datetime "close_hour"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chef_id"], name: "index_restaurants_on_chef_id"
    t.index ["city"], name: "index_restaurants_on_city"
    t.index ["country"], name: "index_restaurants_on_country"
    t.index ["cuisine"], name: "index_restaurants_on_cuisine"
    t.index ["name"], name: "index_restaurants_on_name"
    t.index ["price_range"], name: "index_restaurants_on_price_range"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
