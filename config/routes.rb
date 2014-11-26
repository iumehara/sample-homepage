Rails.application.routes.draw do

  # root 'static_pages#basic'
  root 'static_pages#main'
  # get 'static_pages/main', to: 'static_pages#main'


  resources :blogs

  resources :feedbacks, only: [:create] do
  	collection { get :template }
  end

  resources :posts

end
