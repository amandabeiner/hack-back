class Api::V1::DeveloperSerializer < ActiveModel::Serializer
   attributes :id, :nickname, :name, :email, :image_url, :github_url, :bio, :current_position, :years_of_experience, :skills, :interests, :portfolio_projects, :projects

  def portfolio_projects
    object.portfolio_projects
  end

  def projects
    approved_projects
  end

  private

  def approved_projects
    project_memberships = ProjectMembership.where(developer: object)

    memberships = project_memberships.where(approved: true).pluck(:project_id)

    projects = Project.where(id: memberships)

    return projects
  end
end
