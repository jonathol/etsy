## Component Hierarchy

* **App**
  * Nav Bar
  * Login
  * Sign Up
  * Search
  * **CartIndex**
    * **CartIndexItem**
      * CartDetail
      * Edit Item
      * Delete Item
    * Payment Options
  * **ListingIndex**
    * **ListingIndexItem**
      * Comments/Reviews
      * ListingDetails
      * Shipping and Policies
      * Add Item to Cart
      * Overview/Options

## Routes

* **component:** `App` **path:** `/`
  * **component:** `CartIndex` **path:** `cart`
    * **component:** `CartIndexItem` **path:** `cart/:id`
  * **component:** `ListingIndex` **path:** `listing`
    * **component:** `ListingIndexItem` **path:** `listing/:id`
