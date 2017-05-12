class Api::V1::DeveloperSerializer < ActiveModel::Serializer
   attributes :id, :nickname, :name, :email, :image_url, :github_url, :bio, :current_position, :years_of_experience, :skills, :interests, :portfolio_projects, :projects, :reviews

  def portfolio_projects
    object.portfolio_projects
  end

  def projects
    approved_projects
  end

  def reviews
    object.reviews.limit(5)
  end

  private

  def approved_projects
    project_memberships = ProjectMembership.where(developer: object)

    memberships = project_memberships.where(approved: true).pluck(:project_id)

    projects = Project.where(id: memberships)

    return projects.limit(5)
  end
end
