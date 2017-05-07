FactoryGirl.define do
  factory :project_membership do
    developer
    project
    approved false
  end
end
