require "rails_helper"

describe Api::V1::DevelopersController do
  let!(:developer) { FactoryGirl.create(:developer)}
  let!(:okkyle) { FactoryGirl.create(:portfolio_project)
  }
  let!(:portfolio_project_user) { FactoryGirl.create(:portfolio_project_user, developer: developer, portfolio_project: okkyle)}

  describe "#show" do
    let!(:expected_json) {
      {
        "developer"=> {
          "id"=> developer.id,
          "nickname"=> "amandabeiner",
          "name"=> "Amanda Beiner",
          "email"=> "myemail@me.com",
          "image_url"=> "mypicture.com",
          "github_url"=> "github.com/amandabeiner",
          "bio"=> "I am a developer who likes pugs",
          "current_position"=> "EE",
          "years_of_experience"=> "1-2",
          "skills"=> "doing the things",
          "interests"=> "pugs",
          "portfolio_projects"=> [
            {
              "id"=> okkyle.id,
              "name"=> "ok-kyle",
              "description"=> "there's a kyle for that",
              "source_url"=> "ok-kyle.herokuapp.com",
              "github_url"=>"github.com/michaelgt04/ok-kyle"
            }
          ]
        }
      }
    }

    it "should return a json representation of the specified organization" do
      get :show, id: developer.id

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end
end
