class CreateFollowersTable < ActiveRecord::Migration
  def change
    create_table :followers do |t|
      t.string :name
      t.string :email
      t.timestamps
    end
  end
end
