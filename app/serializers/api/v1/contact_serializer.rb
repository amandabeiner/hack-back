class Api::V1::ContactSerializer < ActiveModel::Serializer
   attributes :id, :name, :email, :image_url
end
