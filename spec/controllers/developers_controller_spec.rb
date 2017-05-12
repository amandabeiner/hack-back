require "rails_helper"

describe Api::V1::DevelopersController do
  let!(:developer) { FactoryGirl.create(:developer)}
  let!(:contact) { FactoryGirl.create(:contact) }
  let!(:okkyle) { FactoryGirl.create(:portfolio_project)
  }
  let!(:portfolio_project_user) { FactoryGirl.create(:portfolio_project_user, developer: developer, portfolio_project: okkyle)}
  let!(:organization) { FactoryGirl.create(:organization) }
  let!(:project) { FactoryGirl.create(:project, organization: organization) }
  let!(:project_membership) { FactoryGirl.create(:project_membership, developer: developer, project: project, approved: true) }
  let!(:review) { FactoryGirl.create(:review, developer: developer, contact: contact) }

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
          ],
          "projects" => [
            {
              "id" => project.id,
              "name" => "Demolish the Patriarchy",
              "description"=> "self explanatory",
              "stack" => "Beyonce",
              "claimed" => false,
              "organization_id" => organization.id,
              "created_at" =>
              "#{project.created_at.iso8601(3)}",
              "updated_at" => "#{project.updated_at.iso8601(3)}",
              "completed" =>  false
            }
          ],
          "reviews" => [
            {
              "id" => review.id,
              "professionalism" => 4,
              "timeliness"=> 3,
              "tech_skills" => 5,
              "review" => "I'm really happy with the final product, but communication could be better",
              "developer_id" => developer.id,
              "contact_id" => contact.id,
              "created_at" => "#{review.created_at.iso8601(3)}",
              "updated_at" => "#{review.updated_at.iso8601(3)}",
            }
          ]
        }
      }
    }

    it "should return a json representation of the specified developer" do
      get :show, params: { id: developer.id }

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end
end
