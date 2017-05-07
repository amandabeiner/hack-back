class CreateProjectMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :project_memberships do |t|
      t.belongs_to :project, null: false
      t.belongs_to :developer
      t.boolean :approved, default: false

      t.timestamps
    end
  end
end
