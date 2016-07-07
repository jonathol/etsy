class Api::PurchasesController < ApplicationController
  def create
    @purchase = Purchase.new(purchase_params)

    if(@purchase.save)
      render "api/purchases/show"
    else
      @errors = purchase.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def update
    @purchase = Purchase.find_by(
      cart_id: purchase_params[:cart_id],
      listing_id: purchase_params[:listing_id]
    )

    if(@purchase.update(purchase_params))

      render "api/purchases/show", status: 200
    else
      @errors = purchase.errors.full_messages
			render "api/shared/error", status: 422
    end

  end

  def destroy
    @purchase = Purchase.find(params[:id])

    if(@purchase.destroy)
      render "api/purchases/show", status: 200
    else
      @errors = purchase.errors.full_messages
			render "api/shared/error", status: 422
    end

  end

  private

  def purchase_params
    params.require(:purchase).permit(:listing_id, :cart_id, :quantity)
  end
end
