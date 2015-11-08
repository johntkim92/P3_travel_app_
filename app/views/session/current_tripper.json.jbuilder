if current_user
  json.current_user do
    json.email current_user.email
    json.username current_user.username
  end
else
  json.current_user nil
end
