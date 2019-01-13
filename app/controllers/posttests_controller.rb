class PosttestsController < ApplicationController
  def index
    @latest = Posttest.last
  end
  def new
    @post = Posttest.new
  end

  def create
    @post = Posttest.new(create_params)
    @post.save
    redirect_to posttests_path
  end

  private
  def create_params
    params.require(:posttest).permit(:name,:review)
  end
end
