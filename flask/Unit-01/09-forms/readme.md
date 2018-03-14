# Flask-SQLAlchemy, Part II

### Part I - User

It's time to build a new application! This application should have full CRUD on the user resource. Each user should have a unique id, first_name, and last_name. You **must** have these fields for the test to pass.

### Part II - Message

Now that you have one resource, it's time to add another! Each user should be able to write many messages. Each message should have a unique id and content. You **must** have these fields for the test to pass.

Your application should have RESTful routing and full CRUD on the User and Message resources. Remember that one user can send many messages. 

### Bonuses

- Add styling to your application. Use Bootstrap or Bootswatch to help scaffold your design.
- Handle 404 errors elegantly.
- Add another column to users for an image_url. This way users can have their images show up in the application.
- Implement a second one-to-many association in your app!
