class Developer < ActiveRecord::Base
  has_many :portfolio_project_users
  has_many :portfolio_projects, through: :portfolio_project_users
  has_many :project_memberships
  has_many :projects, through: :project_memberships

  validates :years_of_experience, inclusion: {in: ["0-1", "1-2", "3-5", "5-10", "10+"]}, allow_nil: true

  private

  def self.find_or_create_developer(auth)
    developer = Developer.find_or_create_by(provider: auth['provider'], uid: auth['uid'])

    developer.nickname = auth['info']['nickname']
    developer.name = auth['info']['name']
    developer.email = auth['info']['email']
    developer.image_url = auth['info']['image']
    developer.github_url = auth['info']['urls']['GitHub']
    developer.token = auth['credentials']['token']
    developer.save
    developer
  end

  def self.organization_auth?(auth)
    auth["provider"] == "facebook" || auth["provider"] == "linkedin" || auth["provider"] == "google_oauth2"
  end
end
