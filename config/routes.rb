Rails.application.routes.draw do
  root to: 'home#index'
  resources :posttests
  get '/profile',   to: 'home#index'
  get '/technology', to: 'home#index'
  get '/app',   to: 'home#index'
  get '/log', to: 'home#index'
  get '/contact',   to: 'home#index'
  get "day1" => "language#index"
  get "day2" => "home#bmi"
  get "day3" => "trainticket#index"
  get "day4" => "keyakizaka#drinksake"
  get "day5" => "home#egoshi"

end
