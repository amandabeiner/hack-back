class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :stack
      t.boolean :claimed, default: false

      t.belongs_to :organization
      t.timestamps
    end
  end
end
