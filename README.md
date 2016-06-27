# J-Etsy

[Heroku link][heroku]

[heroku]: https://j-etsy.herokuapp.com/

## Minimum Viable Product

J-Etsy is a web application inspired by Etsy that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Product Listings
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Shopping Cart
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments / Reviews
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Model, API, and basic APIUtil for Category, Type, and Specific (2 days, W1 Th)

**Objective:** Categories, Types, and Specifics can be viewed.

- [ ] create models
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes controllers
- [ ] jBuilder views
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days, W1 S)

**Objective:** Navigate though all of the categories and its sub-categories

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each components, building out the flux loop as needed.
  - [ ] `CategoryIndex`
  - [ ] `CategoryIndexItem`
  - [ ] `TypeIndex`
  - [ ] `TypeIndexItem`
  - [ ] `SpecificIndex`
  - [ ] `SpecificIndexItem`

### Phase 4: Start Styling (1 days, W1 S)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Listings and Reviews (2 day, W2 T)

**Objective:** Listings can be viewed after navigating through categories.

- [ ] create `Listing` model
- build out API, Flux loop, and components for:
  - [ ] Listing and Review CRUD
  - [ ] adding reviews require a listing
  - [ ] viewing listings by categories
  - [ ] viewing reviews by listings
- Use CSS to style new views


### Phase 6: Carts (1 days, W2 F)

**Objective:** Create a cart that can add and delete listings. Only accessible by owner.

- [ ] create `Cart` model and join table
- build out API, Flux loop, and components for:
  - [ ] adding listings to cart
  - [ ] removing listings from cart
- [ ] Style new elements

### Phase 7: Search (1 days, W2 S)

**Objective:** Working search bar with autocomplete.

- build out API, Flux loop, and components for:
  - [ ] autocompletes correctly
  - [ ] linking to correct listing
- [ ] Style new elements


### Bonus Features (TBD)
- [ ] Categories
- [ ] Favorites
