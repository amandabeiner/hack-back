class RemoveRoleFromDevelopers < ActiveRecord::Migration[5.0]
  def up
    remove_column :developers, :role
  end

  def down
    add_column :developers, :role, :string
  end
end
