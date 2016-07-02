class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render :index
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(
      :name,
      :nutrition,
      :ingredients,
      :img_url,
      :user_id,
      :description
    )
  end


end
