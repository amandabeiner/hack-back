Rails.application.routes.draw do
  get '/profile', to: 'profile#show'
  get '/organizations/:id/profile', to: 'profile#show'
  get '/developers/:id/profile', to: 'profile#show'
  get '/projects/:id', to: 'profile#show'
  get '/projects', to: 'profile#show'

  root 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'


  delete '/logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :developers, only: [:show]
      resources :contacts, only: [:show]
      resources :organizations, only: [:show]
      resources :projects, only: [:index, :show]
    end
  end
end
