Let's rebuild our previous example using a shopping list. The resource we will be working with is `item`. We should be using an array to store our items as well as assigning a unique `id` to each item so that we can find them easily. Our application should have the following routes:

* `GET /items` to show all items in the shopping list
* `GET /items/new` to show a form for creating a new item
* `GET /items/:id` to show a single item
* `GET /items/:id/edit` to show a form for editing a item
* `POST /items` to create an item when a form is submitted
* `PATCH /items/:id` to edit an item when a form is submitted
* `DELETE /items/:id` to delete an item when a form is submitted

### Bonus

1. Create a route for `GET /items/search` which allows a user to search for items in the shopping list.
2. Create a route for `DELETE /items` which allows a user to remove all the items in the shopping list.
