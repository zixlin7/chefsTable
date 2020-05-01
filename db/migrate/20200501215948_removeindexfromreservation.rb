class Removeindexfromreservation < ActiveRecord::Migration[5.2]
  def change
    remove_index :reservations, [:user_id, :time]
  end
end
