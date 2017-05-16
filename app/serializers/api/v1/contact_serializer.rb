class Api::V1::ContactSerializer < ActiveModel::Serializer
   attributes :id, :name, :email, :image_url, :organization_id

   def organization_id
     object.organizations.first.id
   end
end
