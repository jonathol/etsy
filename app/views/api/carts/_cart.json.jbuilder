json.extract!(
  cart,
  :id, :user_id
)

json.purchases do
  json.array!(cart.purchases) do |purchase|
    json.partial! 'api/purchases/purchase', purchase: purchase
  end
end

json.listings do
  json.array!(cart.listings) do |listing|
    json.partial! 'api/listings/listing', listing: listing
  end
end
