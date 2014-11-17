Rails.application.routes.draw do

  root 'static_pages#basic'
  get 'static_pages/main', to: 'static_pages#main'


  resources :blogs

  resources :feedbacks, only: [:create] do
  	collection { get :template }
  end

  resources :posts

end
