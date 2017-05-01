FactoryGirl.define do
  factory :developer do
    provider "Github"
    uid "1"
    nickname "amandabeiner"
    name "amanda beiner"
    email "myemail@me.com"
    image_url "mypicture.com"
    github_url "github.com/amandabeiner"
  end
end
