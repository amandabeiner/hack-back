class User < ActiveRecord::Base
  has_many :organizations
  has_many :portfolio_project_users
  has_many :portfolio_projects, through: :portfolio_project_users

  def self.find_or_create_by_auth(auth)

    if auth["provider"] == "github"
      return find_or_create_developer(auth)
    elsif organization_auth?(auth)
      return find_or_create_organization(auth)
    end
  end

  private

  def self.find_or_create_developer(auth)
    user = User.find_or_create_by(provider: auth['provider'], uid: auth['uid'])

    user.nickname = auth['info']['nickname']
    user.name = auth['info']['name']
    user.email = auth['info']['email']
    user.image_url = auth['info']['image']
    user.github_url = auth['info']['urls']['GitHub']
    user.token = auth['credentials']['token']
    user.role = "developer"
    user.save
    user
  end

  def self.find_or_create_organization(auth)
    user = User.find_or_create_by(provider: auth['provider'], uid: auth['uid'])
    user.name = auth['info']['name']
    user.email = auth['info']['email']
    user.image_url = auth['info']['image']
    user.role = "organization"
    user.save
    user
  end

  def self.organization_auth?(auth)
    auth["provider"] == "facebook" || auth["provider"] == "linkedin" || auth["provider"] == "google_oauth2"
  end
end
