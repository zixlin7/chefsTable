class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :chef_id, null:false
      t.string :name, null:false
      t.string :cuisine
      t.text :address, null:false
      t.string :country, null:false
      t.string :state, null:false
      t.string :city, null:false
      t.integer :zip, null:false
      t.integer :capacity, null:false
      t.integer :price_range
      t.text :overview
      t.text :website_url
      t.string :phone_number
      t.datetime :open_hour
      t.datetime :close_hour

      t.timestamps
    end
    add_index :restaurants, :chef_id
    add_index :restaurants, :name
    add_index :restaurants, :cuisine
    add_index :restaurants, :country
    add_index :restaurants, :city
    add_index :restaurants, :price_range
  end
end
