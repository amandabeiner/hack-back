class Api::V1::DevelopersController < ApplicationController
  def show
    developer = Developer.find(params[:id])

    render json: developer, serializer: Api::V1::DeveloperSerializer
  end
end
