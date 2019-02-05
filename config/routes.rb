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
  get "day7" => "home#todovuejs"
  get "day8" => "home#canvas"
  get "day9" => "home#iconcolor"
  get "day10" => "home#thumgene"
  get "day11" => "home#findonononoka"
  get "day11seikai" => "home#onoseikai"
  get "day12" => "home#catchacold"
  get "day13" => "home#typing"
  get "day14" => "home#useyoutube"
  get "day15" => "home#useapi"
  get "day16" => "home#use-element"
  get "day17" => "home#iphonexxx"


end
