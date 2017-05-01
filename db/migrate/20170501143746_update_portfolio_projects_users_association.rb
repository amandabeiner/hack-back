class UpdatePortfolioProjectsUsersAssociation < ActiveRecord::Migration[5.0]
  def up
    remove_column :portfolio_project_users, :user_id
    add_reference :portfolio_project_users, :developer, index: true
  end

  def down
    remove_column :portfolio_project_users, :developer_id
    add_reference :portfolio_project_users, :user, index: true
  end
end
