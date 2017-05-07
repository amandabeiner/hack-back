require "rails_helper"

describe Api::V1::ProjectsController do
  let(:contact) { FactoryGirl.create(:contact) }
  let(:organization) { FactoryGirl.create(:organization, contact: contact) }
  let!(:project) { FactoryGirl.create(:project, organization: organization) }

  describe "#index" do

    let!(:expected_json) {
      {"projects"=>
        [
          {
            "id"=>project.id,
            "name"=>"Demolish the Patriarchy",
            "description"=>"self explanatory",
            "stack"=>"Beyonce",
            "claimed"=>false,
            "created_at"=>"#{project.created_at.iso8601(3)}",
            "updated_at"=>"#{project.updated_at.iso8601(3)}",
            "completed" => false,
            "organization"=> {
               "id"=>organization.id,
                "name"=>"The best organization",
                "description"=>"the best one. this one. obviously.",
                "mission_statement"=>"crush it",
                "website"=>"www.thebestorg.org",
              },
            "contact"=>{
              "id"=>contact.id,
              "name"=>"Amanda Beiner",
              "email"=>"myemail@me.com",
              "image_url"=>"mypicture.com",
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

  describe "#show" do
    let!(:expected_json){
      {
        "project"=> {
          "id"=> project.id,
          "name"=> "Demolish the Patriarchy",
          "description"=> "self explanatory",
          "stack"=> "Beyonce",
          "claimed"=> false,
          "created_at"=> "#{project.created_at.iso8601(3)}",
          "updated_at"=> "#{project.updated_at.iso8601(3)}",
          "completed" => false,
          "organization"=> {
            "id"=> organization.id,
            "name"=> "The best organization",
            "description"=> "the best one. this one. obviously.",
            "mission_statement"=> "crush it",
            "website"=> "www.thebestorg.org",
          },
          "contact"=> {
            "id"=> contact.id,
            "name"=> "Amanda Beiner",
            "email"=> "myemail@me.com",
            "image_url"=> "mypicture.com"
          }
        }
      }
    }

    it "should return a json representation of the information for the specified project" do
      get :show, params: { id: project.id }

      parsed = JSON.parse(response.body)

      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end
end
