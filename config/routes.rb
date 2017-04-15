Rails.application.routes.draw do
  get '/profile', to: 'profile#show'
  root 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
end
