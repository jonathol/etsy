class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.create!(review_params)
    render :show
  end

  private

  def review_params
    params.require(:review).permit(
      :score,
      :comment,
      :user_id,
      :listing_id
    )
  end

end
