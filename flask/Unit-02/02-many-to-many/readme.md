# Blueprints

### Part I - Questions

1.  Describe the MVC pattern.
2.  In the MVC pattern, does the model communicate directly with the view?
3.  What is the purpose of blueprints?
4.  How does using blueprints help us organize bigger applications?

5.  Finish building CRUD in the many to many application with employees and departments. You can find the starter code [here](https://github.com/rithmschool/flask-many-many-example). You don't need to submit a PR for this part, it's purely for you to get more practice.

### Part II - Exercise

1.  Refactor your users and messages app to use blueprints. Make sure to have a separate file for `models.py`, `views.py`, and `forms.py`. You should have a working 1 to Many application with blueprints when this exercise is complete!

2.  Include the following flash messages (it's important you make sure these are exact so the tests will pass)

    * when a user is created, send a flash message of "User Created!"
    * when a user is updated, send a flash message of "User Updated!"
    * when a user is deleted, send a flash message of "User Deleted!"
    * when a message is created, send a flash message of "Message Created!"
    * when a message is updated, send a flash message of "Message Updated!"
    * when a message is deleted, send a flash message of "Message Deleted!"

3.  If you have not added any styling or testing to your users and messages app, be sure to do so!
    Add another resource to your users and messages application! Create a resource for tags which has a many to many relationship with messages.

* You should be able to create full CRUD on tags
* When you create a message, you should be able to add existing tags to it.
* When you edit a message, you should be able to modify the tags associated to it.
* When you create a tag, you should be able to add existing messages to it.
* When you edit a tag, you should be able to modify the messages associated to it.
* As a bonus, add some tests for your tags! We've provided some starter test code.
