require "rails_helper"

RSpec.describe Developer, type: :model do

  describe "Developer" do
    it { should have_many(:portfolio_project_users) }
    it { should have_many(:portfolio_projects).through(:portfolio_project_users) }

    it { should have_valid(:years_of_experience).when("3-5", nil) }
    it { should_not have_valid(:years_of_experience).when("30") }
  end
end
