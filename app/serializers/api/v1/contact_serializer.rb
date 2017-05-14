class Api::V1::ContactSerializer < ActiveModel::Serializer
   attributes :id, :name, :email, :image_url, :organization_name, :organization_id

   def organization_name
     object.organizations.first.name
   end

   def organization_id
     object.organizations.first.id
   end
end
