class PortfolioProjectUser < ActiveRecord::Base
  belongs_to :developer
  belongs_to :portfolio_project

  validates :developer_id, presence: true
  validates :portfolio_project_id, presence: true
end
