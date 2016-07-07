Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:index, :create]
    resource :cart, only: [:create, :show]
    resources :purchases, only: [:create,:destroy,:update]
  end

end
