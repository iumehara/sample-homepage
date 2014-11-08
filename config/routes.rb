Rails.application.routes.draw do
  root 'static_pages#main'

  resources :blogs
  resources :posts

end
