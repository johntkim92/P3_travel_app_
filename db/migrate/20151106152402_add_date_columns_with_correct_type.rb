class AddDateColumnsWithCorrectType < ActiveRecord::Migration
  def change
    add_column :trips, :start_date, :date, null: false, default: Date.today
    add_column :trips, :end_date, :date, null: false, default: Date.today
  end
end
