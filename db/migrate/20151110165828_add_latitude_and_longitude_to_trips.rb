class AddLatitudeAndLongitudeToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :latitude, :string
    add_column :trips, :longitude, :string
  end
end
