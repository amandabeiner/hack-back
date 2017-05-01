class Api::V1::ContactsController < ApplicationRecord

  def show
    contact = Contact.find(params[:id])
    render json: contact, serializer: Api::V1::ContactSerializer
  end

end
