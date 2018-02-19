For this application you will be rebuilding full CRUD on users, with authentication and authorization as an API. Here are the properties each user should have

- a unique id
- a unique username which should be required
- a password which should be required
- a boolean called isAdmin which should default to false

You should implement the following routes (notice this time we are **never** redirecting or rendering). You can test these routes out using `curl` or `postman`

- `GET /api/users` - this page should list all of the users, but should only be accessible if the user has an `isAdmin` property of `true`.

- `GET /api/users/:id` - this page should show a specific user's information and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`.

- `PATCH /api/users/:id` - this route should update a users information and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`. It should respond with a `200` and the JSON for the updated user

- `DELETE /api/users/:id` - this route should delete user and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`. It should respond with a `204` and a message that says "deleted".

- `POST /api/users` - this page should create a new user and log them in. It should respond with a status code of `201` and the JSON for the new user created.

- `POST /api/users/login` - this page should authenticate a user and if the user successfully authenticates, it should respond with JSON for the new user created. Otherwise it should respond with a `400` and an error message

### Bonus

Add another resource for `todos`, which are nested inside of your `users` routes
