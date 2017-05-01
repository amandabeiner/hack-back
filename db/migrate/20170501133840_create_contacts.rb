class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :image_url, null: false
      t.string :uid, null: false
      t.string :provider, null: false

      t.timestamps
    end
  end
end
