Rails.application.routes.draw do
  resources :clients do 
    resources :lifts, only: [:index]
  end
  resources :lifts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
