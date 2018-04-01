# Blueprints 

### Part I - Questions

1. Describe the MVC pattern.
    The MVC pattern consists of three parts: Model, View, and Controller. The model is responsible for validation, storing data, and retrieving data. The view is the user interface, with minimal logic, leaving the main processing to the controller. The controller serves as the pathway of communication between the model and the view, as well as the processing to determine what needs to be executed. The controller is essentially the brain of the application.

2. In the MVC pattern, does the model communicate directly with the view?
    The model communicates with the controller, which processes information and lets the view know what needs to be done. 

2. What is the purpose of blueprints?
    The purpose of blueprints is to set up a structure that isolates the components of our application into specific containers, minimizing the amount of clutter or irrelevant information present when we try to edit or work with a single aspect of it. It's destructuring for the purpose of better structure and architecture when the size of the project begins to scale.
    
3. How does using blueprints help us organize bigger applications?
    Organizing into smaller moving parts can help us isolate the most relevant pieces of code when debugging, refactoring, or adding to our existing application. 
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
