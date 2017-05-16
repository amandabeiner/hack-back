class Api::V1::SessionsController < ApplicationController
  def show
    user = current_user
    render json: user
  end
end
