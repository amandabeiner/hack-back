Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET'], scope: "user:email"
  provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  provider :linkedin, ENV['LINKEDIN_KEY'], ENV['LINKEDIN_SECRET']
  provider :google_oauth2, ENV['GOOGLE_KEY'], ENV['GOOGLE_SECRET']
end
