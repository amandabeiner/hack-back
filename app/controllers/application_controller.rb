class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    if @current_user
      @current_user
    elsif session[:developer_id]
      Developer.find_by(id: session[:developer_id])
    elsif session[:contact_id]
      Contact.find_by(id: session[:contact_id])
    end
  end
end
