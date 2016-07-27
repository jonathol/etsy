json.extract! listing,
  :id,
  :name,
  :img_url,
  :user_id,
  :ingredients,
  :description,
  :price

json.averageScore listing.averageScore

json.reviews do
  json.array!(listing.reviews) do |review|
    json.partial! 'api/reviews/review', review: review
    json.user review.user,
      :id,
      :username,
      :img_url
  end
end
