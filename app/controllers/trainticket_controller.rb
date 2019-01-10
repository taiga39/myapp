class TrainticketController < ApplicationController
  def index
    @planet = [:Mercury,:Venus,:Earth,:Mars,:Jupiter, :Saturn, :Uranus,  :Neptune]
  end
end
