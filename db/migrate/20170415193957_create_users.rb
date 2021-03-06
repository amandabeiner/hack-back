class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :uid
      t.string :provider
      t.string :token
      t.string :nickname
      t.string :name
      t.string :email
      t.string :image_url
      t.string :github_url
      t.string :role
    end
  end
end
