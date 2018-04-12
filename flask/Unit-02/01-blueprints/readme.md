# Blueprints

### Part I - Questions

1.  Describe the MVC pattern.

MVC--Model, View, Controller--is a pattern implemented when designing apps where the Model and the View communicate with the Controller but not directly with each other. The model is resposible for organizing the data in the application, the controller processes actions depending on the routes requested, gathers that information, and packages it for the view to display to the user.

2.  In the MVC pattern, does the model communicate directly with the view?

The model does not communicate direclty with the view. When a request is made to a specific route, the controller gathers the appropriate information from the model and gives it to the view to display. In our blueprints app, views.py is the controller for each resource--users and messages--and the view from MVC is represented by the templates. Models are stored in models.py.

2.  What is the purpose of blueprints?

Blueprints provide a more standardized version of organizing code as applications scale in size. Ideally, in our application, every resource has its own folder containing its forms, controller, templates, and potentially even models, each as separate files.

3.  How does using blueprints help us organize bigger applications?

Blueprints allows projects to scale. The controller is transfered from a potentially single app.py file to individual view.py files assigned to each resource. Each reasource has its own folder under a parent project folder, making it easier to managed growing resources and routes. **init**.py helps tie all this information together; it is here that blueprints can be registered, allowing for url prefix abbreviation and even duplicate view function names as all routes are uniquely defined in their respecitve resource folders.

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
