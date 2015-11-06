class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :trip, index: true, foreign_key: true
      t.string :entry, null: false

      t.timestamps null: false
    end
  end
end
