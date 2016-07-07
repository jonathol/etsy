json.extract! purchase,
  :id,
  :quantity,
  :cart_id,
  :listing_id

json.listing purchase.listing,
  :name,
  :img_url,
  :price

json.user purchase.listing.user,
  :username,
  :img_url
