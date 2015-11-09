class AddCommenterColumnToComments < ActiveRecord::Migration
  def change
    add_column :comments, :commenter, :string, null: false
  end
end
