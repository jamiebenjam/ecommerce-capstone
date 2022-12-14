Rails.application.routes.draw do
  

  resources :product_categories
  resources :categories
  resources :product_sizes
  resources :sizes
  resources :product_orders
  resources :products
  resources :orders
  resources :users
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
