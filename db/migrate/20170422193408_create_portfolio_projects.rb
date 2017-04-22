class CreatePortfolioProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolio_projects do |t|
      t.string :name, null: false
      t.text :description
      t.string :source_url
      t.string :github_url
    end
  end
end
