class Api::CartsController < ApplicationController
  def create
    @cart = Cart.create!(cart_params)
    render :show
  end

  def show
    @cart = Cart.find_by_user_id(current_user.id)
    render :show
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id)
  end
end
