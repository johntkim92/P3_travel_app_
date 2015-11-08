class RanameTagsToTypeInTrips < ActiveRecord::Migration
  def change
    rename_column :trips, :tags, :type
  end
end
