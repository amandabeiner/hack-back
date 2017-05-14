class Api::V1::ContactSerializer < ActiveModel::Serializer
   attributes :id, :name, :email, :image_url, :organization

   def organization
     object.organizations.first.name
   end
end
