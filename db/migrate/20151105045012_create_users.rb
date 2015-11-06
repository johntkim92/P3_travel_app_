class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, :null => false
      t.string :username, :null => false
      t.string :password_digest, :null => false
      t.string :full_name, :null => false

      t.string :image_file_name
      t.string :image_content_type,
      t.integer :image_file_size

      t.timestamps null: false
    end
  end
end
