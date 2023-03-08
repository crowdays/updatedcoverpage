# config/routes.rb

Rails.application.routes.draw do
  resources :posts do
    collection do
      get 'page/:page', action: :index, as: 'page'
    end
  end

  root 'home#index'
  get '/about', to: 'home#about', as: 'about'
end

