require "rails_helper"

RSpec.describe Developer, type: :model do
  mock_auth = {
	   "provider"=>"github",
	   "uid"=>"123456",
		 "info"=> {
				"nickname"=>"amandabeiner",
				"email"=>"myemail@me.com",
				"name"=>"Amanda Beiner",
				"image"=>"https://avatars2.githubusercontent.com/u/21161427?v=3",
				"urls"=>{"GitHub"=>"https://github.com/amandabeiner", "Blog"=>nil}
			},
			"credentials"=>{"token"=>"123456", "expires"=>false}
		}

  describe "Developer" do
		it { should have_many(:portfolio_project_users) }
    it { should have_many(:portfolio_projects).through(:portfolio_project_users) }

		it { should have_valid(:years_of_experience).when("3-5", nil) }
		it { should_not have_valid(:years_of_experience).when("30") }
	end

	describe "#find_or_create_developer" do
    it "changes the number of developers in the database by 1" do
		  expect { Developer.find_or_create_developer(mock_auth) }.to change{ Developer.count }.by(1)
		end

    it "creates a developer object with the correct attributes" do
		  new_dev = Developer.find_or_create_developer(mock_auth)

      expect(new_dev.provider).to eq("github")
			expect(new_dev.nickname).to eq("amandabeiner")
      expect(new_dev.email).to eq("myemail@me.com")
			expect(new_dev.name).to eq("Amanda Beiner")
		end
  end

  describe "#organization_auth?" do
	  it "should return false if a developer's provider is github" do
		  expect(Developer.organization_auth?(mock_auth)).to eq(false)
		end
  end
end
