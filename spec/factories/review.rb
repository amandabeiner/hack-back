FactoryGirl.define do
  factory :review do
    professionalism 4
    timeliness 3
    tech_skills 5
    review "I'm really happy with the final product, but communication could be better"
    developer
    contact
  end
end
