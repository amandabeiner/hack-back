class UpdateOrganizationUserAssociation < ActiveRecord::Migration[5.0]
  def up
    remove_column :organizations, :user_id
    add_reference :organizations, :contact, index: true
  end

  def down
    remove_column :organizations, :developer_id
    add_reference :organizations, :contact, index: true
  end
end
