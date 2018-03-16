# Blueprints 

### Part I - Questions

1. Describe the MVC pattern.
    Model, View, Controller (or MVC for short) is a pattern to structure large apps. This pattern is followed for each individual resource. The controller is in charge of communicating with the models and view and calling them as needed. The model and view don't directly communicate. The MVC resources are tied together by a central controller. 

2. In the MVC pattern, does the model communicate directly with the view?
    It does not.

2. What is the purpose of blueprints?
    The purpose of blueprints is to enable coders to divide unmanegably large application files into smaller components in a predictable and replicable structure. One of the common patterns that can be followed using blueprints is the MVC pattern.

3. How does using blueprints help us organize bigger applications?
    Blueprints enable coders to divide large app files into separate files and folders. Thereby it is possible to separate resources and models, forms, view functions related to those resources. Thus, it is possible to replicate similar folder/file/name structures for each of the resources and there is no need to come up with separate naming for each to work together. 

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
