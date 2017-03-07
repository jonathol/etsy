json.extract!(
  user,
  :id, :username, :firstname, :lastname, :img_url
)

json.listings do
  json.array!(user.listings) do |listing|
    json.listing listing
  end
end
