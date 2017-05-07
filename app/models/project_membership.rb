class ProjectMembership < ActiveRecord::Base
  belongs_to :developer
  belongs_to :project

end
