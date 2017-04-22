Rails.application.routes.draw do
  get '/profile', to: 'profile#show'
  root 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'

  get '/developer/:id/profile', to: 'profile#show'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
    end
  end

  delete '/logout', to: 'sessions#destroy'
end
