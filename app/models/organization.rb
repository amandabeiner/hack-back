class Organization < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :mission_statement, presence: true

  belongs_to :contact
  has_many :projects
end
