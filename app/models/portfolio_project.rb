class PortfolioProject < ActiveRecord::Base
  has_many :portfolio_project_users
  has_many :developers, through: :portfolio_project_users

  validates :name, presence: true

end
