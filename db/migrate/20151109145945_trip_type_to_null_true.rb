class TripTypeToNullTrue < ActiveRecord::Migration
  def change
    change_column :trips, :trip_type, :string, :null => true
  end
end
