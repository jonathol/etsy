# Flux Cycles

## Cart Cycles

### Cart API Request Actions

* `fetchCart`
  0. invoked from `CartIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cart` is called.
  0. `receiveCart` is set as the callback.

* `fetchCartItem`
  0. invoked from `CartDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cart/:id` is called.
  0. `receiveCartItem` is set as the callback.

* `addToCart`
  0. invoked from add to cart button `onclick`
  0. `POST /api/cart`  is called.
  0. `receiveCartItem` is set as the callback.  

* `editCart`
  0. invoked from `tbd` `onSubmit`
  0. `PATCH /api/cart/:id` is called.
  0. `receiveCartItem` is set as the callback.

* `deleteFromCart`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/cart/:id` is called.
  0. `removeCartItem` is set as the callback.


### Cart API Response Actions

* `receiveCart`
  0. invoked from an API callback.
  0. `Cart` store updates `_cart` and emits change.

* `receiveCartItem`
  0. invoked from an API callback.
  0. `Cart` store updates `_cart[id]` and emits change.

* `removeCartItem` store updates `_cart` and emits change.
  0. invoked from an API callback.
  0. `Cart` store removes `_cart[id]` and emits change.

### Store Listeners

* `CartIndex` component listens to `Cart` store.
* `CartIndexItem` component listens to `Cart` store.
* `CartDetail` component listens to `Cart` store.

## Listing Cycles

### Listing API Request Actions

* `fetchAllListing`
  0. invoked from `ListingIndex` `didMount` / `willReceiveProps`
  0. `GET /api/listing` is called.
  0. `receiveAllListing` is set as the callback.

* `fetchSingleListing`
  0. invoked from `ListingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/listing/:id` is called.
  0. `receiveSingleListing` is set as the callback.

### Listing API Response Actions

* `receiveAllListing`
  0. invoked from an API callback
  0. `Listing` store updates `_listing` and emits change.

* `receiveSingleListing`
  0. invoked from an API callback.
  0. `Listing` store updates `_listing[id]` and emits change.

### Store Listeners

* `ListingIndex` component listens to `Listing` store.
* `ListingIndexItem` component listens to `Listing` store.
* `ListingDetail` component listens to `Listing` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `ProductSearchBar` `onChange` when there is text
  0. `GET /api/listing` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `ListingSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
