class RenameUserModel < ActiveRecord::Migration[5.0]
  def change
    rename_table :users, :developers
  end
end
