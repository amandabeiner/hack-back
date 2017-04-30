require "rails_helper"

describe Api::V1::ProjectsController do
  describe "#index" do
    let(:user) { FactoryGirl.create(:user) }
    let(:organization) { FactoryGirl.create(:organization, user: user) }
    let!(:project) { FactoryGirl.create(:project, organization: organization) }

    let!(:expected_json) {
      {"projects"=>
        [
          {
            "id"=>"#{project.id}",
            "name"=>"Demolish the Patriarchy",
            "description"=>"self explanatory",
            "stack"=>"Beyonce",
            "claimed"=>false,
            "created_at"=>"#{project.created_at.iso8601}",
            "updated_at"=>"#{project.updated_at.iso8601}",
            "organization"=> {
               "id"=>"#{organization.id}",
                "name"=>"The best organization",
                "description"=>"the best one. this one. obviously.",
                "mission_statement"=>"crush it",
                "website"=>"www.thebestorg.org",
              },
            "contact"=>{
              "id"=>"#{user.id}",
              "name"=>"amanda beiner",
              "email"=>"myemail@me.com",
              "image_url"=>"mypicture.com",
              "github_url"=>"github.com/amandabeiner",
              "bio"=>nil,
              "current_position"=>nil,
              "years_of_experience"=>nil,
              "skills"=>nil,
              "interests"=>nil
            }
          }
        ]
      }
    }


    it "should return a json representation of the projects in the database" do
      get :index
      parsed = JSON.parse(response.body)

      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end

end
