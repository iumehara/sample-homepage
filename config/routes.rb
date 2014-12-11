Rails.application.routes.draw do

  root 'static_pages#main'

  resources :feedbacks, only: [:create] do
  	collection { get :template }
  end

end
