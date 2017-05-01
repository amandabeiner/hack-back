require "rails_helper"

RSpec.describe PortfolioProject, type: :model do

  describe "PortfolioProject" do
    it { should have_many(:portfolio_project_users) }
    it { should have_many(:developers).through(:portfolio_project_users) }
  end

  it { should have_valid(:name).when("Ok-Kyle")}
  it { should_not have_valid(:name).when(nil)}
end
