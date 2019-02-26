# Foodsy

[Foodsy live][heroku]

[heroku]: https://www.foodsy.me

Foodsy is a full-stack web application inspired by Etsy that utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

Foodsy delivers all content on a single static page. This is achieved by rendering basic features, such as view a product, on the static page. Other components such as the user's profile and cart is done by checking the `SessionStore`  to see if there's a user logged in with `SessionStore.isUserLoggedIn()`. After checking to see if the user is logged in with `ApplicationController#logged_in?`, the current user's name, username, and profile pic is brought to the frontend and the appropriate content is rendered.


```javascript
const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ ListingIndex } />
      <Route path="/listing/:listingId" component={ ListingShow }/>
      <Route path="/people" component={ People } />
      <Route path="/cart" component={ CartIndex } />    
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  Modal.setAppElement(root);
  ReactDOM.render(appRouter, root);
});
```

```html
<script id="bootstrap-current-user" type="text/javascript">
  <% if logged_in? %>
  	window.currentUser = <%= render("api/users/user.json.jbuilder",
  		user: current_user).html_safe %>
  <% end %>
</script>

<div id='content'></div>
  ```

### Product Listings

On the database side, listings are stored in a table in the database which contains columns for `id`, `user_id`, `name`, `img_url`, `ingredients`, `description`, and `price`.  Upon login, an API call is made to the database which displays the `ListingIndex`.

![image of listing index](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950114/Screen_Shot_2017-06-08_at_12.22.51_PM_gzengp.png)

The `ListingIndex` populated with `ListingIndexItem`s that display their image and name. Clicking on a `ListingIndexItem` will render the `ListingShow` component which contains more information such as price and ingredients. In addition, there are also options to either buy or add the product to the current user's cart.

![image of listing show](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950112/Screen_Shot_2017-06-08_at_12.23.18_PM_ync8gm.png)

### Cart

Implementing the cart started with creating a table with the columns `id` and `user_id`. This table is joined to the `listings` table through a `purchases` table with the columns `id`, `quantity`, `cart_id`, and `listing_id`.  

By clicking on the shopping cart icon in the nav bar, `CartIndex` is rendered along with each `CartIndexItem`. Each `CartIndexItem` allows you to edit, remove, or buy the item.

The cart can't be accessed unless the user is logged in.

![image of cart index](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950109/Screen_Shot_2017-06-08_at_12.23.58_PM_gjagqs.png)

### Search

The `Search` component populates its state by adding a listener to the `ListingStore` and calling `ListingStore.all()`. Typing in the search bar will bring up a list of all products that matches the input. Clicking on a product will render the appropriate `LisingShow` component.

Search bar:

![image of autocomplete](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950112/Screen_Shot_2017-06-08_at_12.25.03_PM_qcaslp.png)

Clicking on a product in the suggestion list:

![image of redirect](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950109/Screen_Shot_2017-06-08_at_12.25.32_PM_emuvpg.png)

### Reviews

To create a `Review` component, a `reviews` table with the columns `id`, `score`, `user_id`, `comment`, and `listing_id`. The review form can only be accessed after the user has purchased a product.

![image of review form](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950107/Screen_Shot_2017-06-08_at_12.27.16_PM_ykm8go.png)

Reviews for a product is displayed in the `LisingShow` component under the `Reviews` tab.

![image of review index](http://res.cloudinary.com/jonathol/image/upload/c_scale,w_800/v1496950112/Screen_Shot_2017-06-08_at_12.27.51_PM_qq8lhc.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to add to and refactor this project. Other features that I plan on adding are listed below.

### Categories

Searching for products through categories is a feature I would like to implement. Categories will have tiers that will help users pinpoint the product they desire. Implementation will be similar to my `Listings`.

### User Profile Page

I plan on eventually implementing a user profile that can be accesses through the nav bar. This will allow the user to view and edit their profile, view their favorite items, see their followers and provide contact information.

### Favorites

Not a major functionality but this will allow a user to quickly find a product they really like.

### Store

A store function will allow users to sell their products to other users. On Etsy, this is the only way to have your product be displayed in their catalogue.
