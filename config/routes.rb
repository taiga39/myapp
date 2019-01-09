Rails.application.routes.draw do
  root to: "home#index"
  get "day1" => "language#index"
end
