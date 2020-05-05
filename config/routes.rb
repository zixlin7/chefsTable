Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:index, :show, :create] 
    resource :session, only:[:create, :destroy]
    resources :restaurants, only:[:index, :show] 
    resources :reservations, except:[:new, :edit]
    resources :reviews, except:[:new, :edit]
  end
  root "staticpages#root"
end
