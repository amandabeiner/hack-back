class Review < ApplicationRecord
  validates :professionalism, presence: true, inclusion: {in: 1..5}
  validates :tech_skills, presence: true, inclusion: {in: 1..5}
  validates :timeliness, presence: true, inclusion: {in: 1..5}

  belongs_to :developer
  belongs_to :contact

end
