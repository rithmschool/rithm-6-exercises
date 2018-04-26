# Express CRUD with PUG

For this exercise we will be building a simple application where we will store a shopping list. You should use an **array** to store your animals in the shopping list.

Our application should have the following routes:

1.  `GET /` - this should redirect to `/animals`
1.  `GET /animals` - this should render a list of shopping animals.
1.  `GET /animals/new` - this page should render a form where a user can add an animal to their shopping list, with at least `name` and `price` attributes. When the form is submitted, the browser should make a `POST` request to `/animals`.
1.  `POST /animals` - this route should accept form data and add it to the shopping list.

### Bonus

1.  `GET /animals/:id` - this route should display a single animal's name and price
1.  `GET /animals/:id/edit` - this route should render a form where the user can update the name or price of the animal, which sends a PATCH to `/animals/:id`, or click an `X` to delete the animal, sending a DELETE to `/animals/:id`
1.  `PATCH /animals/:id` - this route should accept edits to existing animals.
1.  `DELETE /animals/:id` - this route should allow you to delete a specific animal from the array.
