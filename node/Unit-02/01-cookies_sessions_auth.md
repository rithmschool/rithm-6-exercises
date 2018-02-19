# Cookies + Sessions Auth

For this application you will be building full CRUD on users, but with authentication and authorization. Here are the properties each user should have

- a unique id
- a unique username which should be required
- a password which should be required
- a boolean called `isAdmin` which should default to false

You should implement the following routes

- `GET /` - this page should redirect to the `users/login` route if the user is not authenticated.

- `GET /users/login` - this page should render a form for a user to login unless the user is already logged in, if they are it should redirect to the `/users/:id` route.

- `GET /users/new` - this page should render a form for a user to sign up unless the user is already logged in, if they are it should redirect to the `/users/:id` route.

- `GET /users` - this page should list all of the users, but should only be accessible if the user has an `isAdmin` property of `true`.

- `GET /users/:id` - this page should show a specific user's information and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`.

- `GET /users/:id/edit` - this page render a form to edit a specific user's information and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`.

- `PATCH /users/:id` - this route should update a users information and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`.

- `DELETE /users/:id` - this route should delete user and should only be accessible by the user logged in or another user that has an `isAdmin` property of `true`.

- `POST /users` - this page should create a new user and log them in. Afterwards, it should redirect them to the `/users/:id` route.

- `POST /users/login` - this page should authenticate a user and if the user successfully authenticates, it should redirect them to the `/users/:id` route.

### Bonus

Add another resource for `todos`, which are nested inside of your `users` routes
