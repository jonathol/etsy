json.extract!(
  user,
  :id, :username, :firstname, :lastname, :img_url
)

json.listings do
  json.array!(user.listings) do |listing|
    json.name listing.name
    json.img_url listing.img_url

  end
end
