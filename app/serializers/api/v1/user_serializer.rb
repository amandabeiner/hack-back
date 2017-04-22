class Api::V1::UserSerializer < ActiveModel::Serializer
   attributes :id, :nickname, :name, :email, :image_url, :github_url, :bio, :current_position, :years_of_experience, :skills, :interests, :created_at, :updated_at, :role, :portfolio_projects

  def portfolio_projects
    object.portfolio_projects
  end
end
