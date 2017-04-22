class PortfolioProjectUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :portfolio_project

  validates :user_id, presence: true
  validates :portfolio_project_id, presence: true
end
