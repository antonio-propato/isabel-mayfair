class PagesController < ApplicationController
  def about
  end

  def menu
  end

  def events
  end

  def dragonroom
    @dragon = Dragon.New
  end


end
