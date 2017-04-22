class CreatePortfolioProjectUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolio_project_users do |t|
      t.belongs_to :user, null: false
      t.belongs_to :portfolio_project, null: false
    end
  end
end
