class RenameTypeToTripType < ActiveRecord::Migration
  def change
    rename_column :trips, :type, :trip_type
  end
end
