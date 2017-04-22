Rails.application.routes.draw do
  get '/profile', to: 'profile#show'
  get '/organizations/:id/profile', to: 'profile#show'

  root 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'

  get '/developers/:id/profile', to: 'profile#show'

  delete '/logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :organizations, only: [:show]
      resources :projects, only: [:index, :show]
    end
  end
end
