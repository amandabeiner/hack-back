Rails.application.routes.draw do
  get '/profile', to: 'profile#show'
  get '/organizations/:id/profile', to: 'profile#show'

  root 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:show]
    end
  end
end
