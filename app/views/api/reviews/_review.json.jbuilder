json.extract! review,
  :id,
  :comment,
  :score,
  :user_id,
  :listing_id

json.user review.user,
  :username,
  :img_url
