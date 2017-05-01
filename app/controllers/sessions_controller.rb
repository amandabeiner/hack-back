class SessionsController < ApplicationController

  def create
    auth_hash = request.env["omniauth.auth"]

    if organization_auth?(auth_hash)
      contact = Contact.find_or_create_contact(auth_hash)
      session[:contact_id] = contact.id
      organization = contact.organizations.first
      redirect_to "/organizations/#{organization.id}/profile"
    else
      binding.pry
      developer = Developer.find_or_create_developer(auth_hash)
      session[:developer_id] = developer.id
      redirect_to "/developers/#{developer.id}/profile"
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  private

  def organization_auth?(auth_hash)
    auth_hash["provider"] == "facebook" || auth_hash["provider"] == "linkedin" || auth_hash["provider"] == "google_oauth2"
  end
end
