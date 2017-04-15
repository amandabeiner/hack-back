FactoryGirl.define do
  factory :user do
    provider "Github"
    uid "1"
    nickname "amandabeiner"
    name "amanda beiner"
    email "myemail@me.com"
    image_url "mypicture.com"
    github_url "github.com/amandabeiner"
    role "developer"

  end
end
