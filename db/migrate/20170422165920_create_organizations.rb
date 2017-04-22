class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :mission_statement, null: false
      t.string :website

      t.belongs_to :user
      t.timestamps
    end
  end
end
