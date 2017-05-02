require "rails_helper"

RSpec.describe PortfolioProjectUser, type: :model do

  describe "PortfolioProjectUser" do
    it { should belong_to(:developer) }
    it {should belong_to(:portfolio_project)}
  end
end
