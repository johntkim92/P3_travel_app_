class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.string :full_name, null: false

      t.timestamps null: false
    end

    add_index :users, :username
  end
end
