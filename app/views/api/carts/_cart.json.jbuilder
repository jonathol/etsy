json.extract!(
  cart,
  :id, :user_id
)

json.purchases do
  json.array!(cart.purchases) do |purchase|
    json.partial! 'api/purchases/purchase', purchase: @purchase
  end
end
