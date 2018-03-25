# Blueprints 

### Part I - Questions

1. Describe the MVC pattern.
M - Model: models.py The models the ORM maps to tables in our database.  Used (by the Controller) for writing and retrieving data from the database.
V - View: What the user sees, i.e., the templates, populated with data received from the Controller.  Contain minimal logic for displaying data to the user.
C - Controller: views.py Responsible for communication between M & V. Uses models to retrieve, store, and manipulated data from the database to be sent to the View for display to the user.
2. In the MVC pattern, does the model communicate directly with the view?
Nope!
2. What is the purpose of blueprints?
Blueprints help organize larger applications.
3. How does using blueprints help us organize bigger applications?
They enable streamlined communication in an MVC pattern in a larger file structure without complicated naming or overly large files.

### Part II - Exercise

1. Refactor your users and messages app to use blueprints.  Make sure to have a separate file for `models.py`, `views.py`, and `forms.py`. You should have a working 1 to Many application with blueprints when this exercise is complete!

2. Include the following flash messages (it's important you make sure these are exact so the tests will pass)
    - when a user is created, send a flash message of "User Created!"
    - when a user is updated, send a flash message of "User Updated!"
    - when a user is deleted, send a flash message of "User Deleted!"
    - when a message is created, send a flash message of "Message Created!"
    - when a message is updated, send a flash message of "Message Updated!"
    - when a message is deleted, send a flash message of "Message Deleted!"

3. If you have not added any styling or testing to your users and messages app, be sure to do so!
