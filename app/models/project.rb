class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  belongs_to :organization
  has_many :project_memberships
  has_many :developers, through: :project_memberships
end
