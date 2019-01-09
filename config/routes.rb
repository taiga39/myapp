Rails.application.routes.draw do
  root to: "home#index"
  get "day1" => "language#index"
  get "day2" => "home#bmi"
end
