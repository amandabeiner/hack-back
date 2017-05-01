FactoryGirl.define do
  factory :developer do
    provider "Github"
    uid "1"
    nickname "amandabeiner"
    name "Amanda Beiner"
    email "myemail@me.com"
    image_url "mypicture.com"
    github_url "github.com/amandabeiner"
    bio "I am a developer who likes pugs"
    current_position "EE"
    years_of_experience "1-2"
    skills "doing the things"
    interests "pugs"
  end
end
