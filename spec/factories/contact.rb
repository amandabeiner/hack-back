FactoryGirl.define do
  factory :contact do
    provider "facebook"
    uid "1"
    name "Amanda Beiner"
    email "myemail@me.com"
    image_url "mypicture.com"
  end
end
