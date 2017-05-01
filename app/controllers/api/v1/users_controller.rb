class Api::V1::UsersController < ApplicationController
  def show
    user = User.find(params[:id])

    if user.role == "developer"
      render json: user, serializer: Api::V1::DeveloperSerializer
    else
      render json: user, serializer: Api::V1::ContactSerializer
    end
  end
end
