class TrainticketController < ApplicationController
  def index
    @planet = [:Mercury,:Venus,:Earth,:Mars,:Jupiter, :Saturn, :Uranus, :Pluto, :Neptune]
  end
end
