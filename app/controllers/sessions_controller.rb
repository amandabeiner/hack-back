class SessionsController < ApplicationController

  def create
    user = User.find_or_create_by_auth(request.env["omniauth.auth"])

    if user
      session[:user_id] = user.id
      if user.role == "developer"
        redirect_to "/developer/#{user.id}/profile"
      else
        redirect_to profile_path
      end
    else
      redirect_to root_path
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end
