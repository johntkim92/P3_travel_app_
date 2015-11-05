class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.references :user, index: true, foreign_key: true
      t.string :title, null: false
      t.string :destination, null: false
      t.string :description, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :tags, null: false
      t.string :notes

      t.timestamps null: false
    end

    add_index :trips, :tags
  end
end
