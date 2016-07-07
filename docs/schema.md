# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed
comments    | text      |
score       | integer   | not null

## carts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed

## purchases
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
quantity    | integer   | not null
cart_id     | integer   | not null, foreign key (references carts), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed

## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
nutrition   | text      | not null
ingredients | text      | not null
img_url     | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
firstname       | string    |
lastname        | string    |
img_url         | string    |
