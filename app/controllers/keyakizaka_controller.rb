class KeyakizakaController < ApplicationController
  def drinksake
    gon.year = 2019 + 18
    gon.month = 5
    gon.day = 1

    gon.hour = 0
    gon.minute = 0
    gon.second = 0
  end
end
