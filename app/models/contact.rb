class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :image_url, presence: true
  validates :uid, presence: true
  validates :provider, presence: true

  private

  def self.find_or_create_contact(auth)
    contact = Contact.find_or_create_by(provider: auth['provider'], uid: auth['uid'])
    contact.name = auth['info']['name']
    contact.email = auth['info']['email']
    contact.image_url = auth['info']['image']
    contact.save
    contact
  end
end
