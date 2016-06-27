# Schema Information

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## types
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key (references categories), indexed
name        | string    | not null


## specifics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type_id     | string    | not null, foreign key (references types), indexed
name        | string    | not null



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
user_id     | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references listings), indexed


## Listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
specifics_id| integer   | not null, foreign key (references specifics), indexed
descriptions| text      |


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
