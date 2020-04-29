class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null:false
      t.integer :user_id, null:false
      t.integer :number_of_party, null:false
      t.datetime :time, null:false

      t.timestamps
    end
    add_index :reservations, :restaurant_id;
    add_index :reservations, :user_id;
    add_index :reservations, :time;
    add_index :reservations, [:user_id, :time], unique: true;
  end
end
