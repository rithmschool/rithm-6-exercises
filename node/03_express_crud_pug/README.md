# Express CRUD with PUG

For this exercise we will be building a simple application where we will store a shopping list. You should use an **array** to store your items in the shopping list.

Our application should have the following routes:

1.  `GET /` - this should redirect to `/items`
1.  `GET /items` - this should render a list of shopping items.
1.  `GET /items/new` - this page should render a form where a user can add an item to their shopping list, with at least `name` and `price` attributes. When the form is submitted, the browser should make a `POST` request to `/items`.
1.  `POST /items` - this route should accept form data and add it to the shopping list.

### Bonus

1.  `GET /items/:id` - this route should display a single item's name and price
1.  `GET /items/:id/edit` - this route should render a form where the user can update the name or price of the item, which sends a PATCH to `/items/:id`, or click an `X` to delete the item, sending a DELETE to `/items/:id`
1.  `PATCH /items/:id` - this route should accept edits to existing items.
1.  `DELETE /items/:id` - this route should allow you to delete a specific item from the array.
