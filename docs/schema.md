# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
date created| date      | not null
user_id     | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed


## carts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
user_id     | integer   | not null, foreign key (references users), indexed



## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
details     | string    |


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
