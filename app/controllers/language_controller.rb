class LanguageController < ApplicationController
    def index
    language = ["python","ruby","java","javascript","scratch","swift","php","scala","kotlin"]
    @mondai = []
    @language = []

    5.times do
      number = rand(0..8)
      @mondai << language[number]
      @language << language[number]
    end

    @langquiz = @mondai.map do |lang|
      splitlang = lang.split("").shuffle!.join
    end

    gon.toi1 = @language[0]
    gon.toi2 = @language[1]
    gon.toi3 = @language[2]
    gon.toi4 = @language[3]
    gon.toi5 = @language[4]

  end
end
