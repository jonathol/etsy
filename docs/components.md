## Component Hierarchy

* **App**
  * **CategoryIndex**
    * Search
    * **CategoryIndexItem**
      * Filter for TypeIndex
      * **TypeIndex**
        * filter for TypeIndexItem
        * **TypeIndexItem**
  * **CartIndex**
  * **ListingIndex**
    * **ListingIndexItem**



## Routes

* **component:** `App` **path:** `/`
  * **component:** `CategoryIndex` **path:** `category`
    * **component:** `CategoryIndexItem` **path:** `category/:categoryId`
    * **component:** `TypeIndex` **path:** none
      * **component** `TypeIndexItem` **path:** `category/:categoryId/:typeId`
      * **component:** `SpecificIndex` **path:** none
        * **component:** `SpecificIndexItem` **path:** `category/:categoryId/:typeId/:specificId`
  * **component:** `CartIndex` **path:** `cart`
  * **component:** `ListingIndex` **path:** none
    * **component:** `ListingDetail` **path:** `listing/:id`
