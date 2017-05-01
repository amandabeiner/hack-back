FactoryGirl.define do
  factory :contact do
    provider "Facebook"
    uid "1"
    name "amanda beiner"
    email "myemail@me.com"
    image_url "mypicture.com"
  end
end
