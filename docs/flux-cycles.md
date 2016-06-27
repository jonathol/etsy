# Flux Cycles

## Category Cycles

### Category API Request Actions

* `fetchAllCategory`
  0. invoked from `CategoryIndex` `didMount`/`willReceiveProps`
  0. `GET /api/category` is called.
  0. `receiveAllCategory` is set as the callback.

* `fetchSingleCategory`
  0. invoked from `CategoryIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/category/:categoryId` is called.
  0. `receiveSingleCategory` is set as the callback.

### Category API Response Actions

* `receiveAllCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_category` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_category[categoryId]` and emits change.

### Store Listeners

* `CategoryIndex` component listens to `Category` store.
* `CategoryIndexItem` component listens to `Category` store.

## Type Cycles

### Type API Request Actions

* `fetchTypes`
  0. invoked from `CategoryIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/category/:categoryId` is called.
  0. `receiveTypes` is set as the callback.

* `fetchSingleType`
  0. invoked from `typeIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/category/:categoryId/:typeId` is called.
  0. `receiveSingleType` is set as the callback.

### Type API Response Actions

* `receiveTypes`
  0. invoked from an API callback.
  0. `Category` store updates `_category` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_category[:typeId]` and emits change.

### Store Listeners

* `typeIndex` component listens to `Category` store.

## Specific Cycles

### Specific API Request Actions

* `fetchSpecific`
  0. invoked from `typeIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/category/:categoryId/:typeId` is called.
  0. `receiveSpecific` is set as the callback.

* `fetchSingleSpecific`
  0. invoked from `specificIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/category/:categoryId/:typeId/:specificId` is called.
  0. `receiveSingleSpecific` is set as the callback.

### Specific API Response Actions

* `receiveSpecific`
  0. invoked from an API callback.
  0. `Category` store updates `_category` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_category[:specificId]` and emits change.

### Store Listeners

* `SpecificIndex` component listens to `Category` store.

## Cart Cycles

### Cart API Request Actions

* `fetchCart`
  0. invoked from `CartIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cart` is called.
  0. `receiveCart` is set as the callback.

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

## Listing Cycles

### Listing API Request Actions

* `fetchSingleListing`
  0. invoked from `ListingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/listing/:listingId` is called.
  0. `receiveSingleListing` is set as the callback.

### Listing API Response Actions

* `receiveSingleListing`
  0. invoked from an API callback.
  0. `Category` store updates `_category[:listingId]` and emits change.

### Store Listeners

* `ListingDetail` component listens to `Category` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `ProductSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `ProductSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
