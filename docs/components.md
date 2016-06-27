## Component Hierarchy

* **App**
  * **ProductIndex**
    * Search
    * **ProductIndexList**
      * **ProductIndexListItem**
        * **ProductDetail*
  * **CartIndex**
    * CartIndexItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `ProductIndex` **path:** index
    * **component:** `ProductIndexList` **path:** `index/:categoryId`
      * **component:** `ProductIndexListItem` **path:** `index/:categoryId/:typeId`
        * **component:** `ProductDetail` **path:** `index/:categoryId/:typeId/:itemId`
  * **component:** `CartIndex` **path:** cart
