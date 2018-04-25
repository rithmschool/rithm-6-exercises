# Rithm 6 Exercises

This is the master repository for all of Rithm School's sixth cohort's exercises.
Each student is assigned their own personal branch based on their first name to keep track of their progress.
Students can only push to their own branches.

## Exercise Workflow

### Getting Started

0.  First clone the repository locally: `git clone git@github.com:rithmschool/rithm-6-exercises.git`.
1.  Before you start work on an assignment, make sure the master branch of the repo is updated locally: `git checkout master` followed by `git pull`.
1.  Then update your personal branch: `git checkout michael` followed by `git merge master`. This could _very rarely_ result in a merge conflict, which you can resolve using the built-in VSCode [merge conflict resolution tool](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts).

### Working on and Submitting Assignments

1.  To start a new assignment, create a new branch off of your personal branch which must be **up-to-date-with-master** (see above): `git checkout -b michael-big-o-exercise`.
1.  While working on the assignment, you may push your branch upstream so it lives on GitHub as well as locally: `git push -u origin michael-big-o-exercise`.
1.  Complete your work on the assignment, committing as often as you see fit on that branch.
1.  When your assignment is complete, make sure you push your changes (`git push` if you've set the upstream origin or `git push -u origin michael-big-o-exercise` if you haven't pushed before).
1.  Next, open a pull request in GitHub. [Click here](https://help.github.com/articles/creating-a-pull-request/) for instructions on how to do that. The Pull Request **must be against your personal branch** otherwise we will reject it. If you accidentally submit a Pull Request against the wrong branch, you can change it on GitHub.
1.  Instructors may offer feedback, request changes, or reject a pull request at their disgression. We will always cite reasons for requesting changes or rejecting.
1.  If you need to make changes or open a new Pull Request, you may continue to push to the assignment branch while the PR is open. It will automatically update.
1.  Once your PR has been approved, you should merge the assignment branch into your personal branch and subsequently delete the assignment branch in GitHub. Note: instructors may do this for you.
1.  Repeat the above steps, making sure to keep your personal branch up to date with master.

### Rules, Guidelines, Caveats

1.  There should only be 1 branch per assignment per person.
1.  There should only be 1 assignment per branch.
1.  Do not tamper with `.gitconfig` and `.gitignore` files that we've set up for you.
1.  You can have several pull requests open simultaneously, but we will require that they be up-to-date with your personal branch before merging. This means once one of them is merged, the other PRs will need to be updated (this can be done easily via GitHub).
1.  Please remember to delete your branches on GitHub once the assignment is complete, since there are so many of you!
1.  Try to name your assignment branches with your name and the name of the assignment so we can keep track of them easily.
1.  Try to have a reasonable number of commits per assignment (between 1 and 10 perhaps, depending on the complexity of the assignment).
1.  (Advanced) You may "squash and merge" or rebase at your own risk if you want to keep your personal branch clean.
1.  It is impossible for students to affect the code of the `master` or `solutions` branches so you don't need to worry about accidentally deleting things, etc.

## I. Intermediate & Advanced JavaScript

1.  [Your First Pull Request](./intermediate-js/00-first-pull-request)
1.  [Big O Exercise](./intermediate-js/01-big-o)
1.  [Testing Exercise](./intermediate-js/02-testing)
1.  [Recursion Exercise](./intermediate-js/03-recursion)
1.  [CSS Positioning Exercise](./intermediate-js/04-css-positioning)
1.  [CSS Mockup Exercise](./intermediate-js/05-css-mocks)
1.  [Bootstrap Mockup Exercise](./intermediate-js/06-bootstrap-mocks)
1.  [jQuery Exercise](./intermediate-js/07-jquery)
1.  [AJAX with jQuery Exercise](./intermediate-js/08-ajax-jquery)
1.  [ES2015 Exercise](./intermediate-js/09-es2015)
1.  [Object Oriented Exercises](./intermediate-js/10-oop)

## II. Flask

### Unit 01 - Intro to Flask

1.  [Introduction To Flask](./flask/Unit-01/01-flask-intro)
1.  [Routing with Flask](./flask/Unit-01/02-flask-routing)
1.  [Templating with Jinja2](./flask/Unit-01/03-templating)
1.  [CRUD with Flask](./flask/Unit-01/04-flask-crud)
1.  [SQL Alchemy, Part I](./flask/Unit-01/05-sql-alchemy-1)
1.  [Migrations](./flask/Unit-01/06-migrations)
1.  [SQL Alchemy, Part II](./flask/Unit-01/07-sql-alchemy-2)
1.  [Testing With Flask](./flask/Unit-01/08-testing)
1.  [Server Side Validation with WTForms](./flask/Unit-01/09-forms)
1.  [Heroku](./flask/Unit-01/10-heroku)

### Unit 02 - Intermediate & Advanced Flask

1.  [Structuring Larger Flask Applications](./flask/Unit-02/01-blueprints)
1.  [Many to Many](./flask/Unit-02/02-many-to-many)
1.  [Hashing and Sessions](./flask/Unit-02/03-hashing-sessions)
1.  [Authentication with Flask Login](./flask/Unit-02/04-flask-login)
1.  [OAuth with Flask](./flask/Unit-02/05-oauth)

## III. SQL

1.  [SQL Fundamentals](./sql/01-fundamentals.md)
1.  [CRUD Operations](./sql/02-crud_operators.md)
1.  [Aggregates](./sql/03-aggregates.md)
1.  [Joins](./sql/04-joins.md)
1.  [Normalization](./sql/05-normalization.md)
1.  [Data Modeling](./sql/06-modeling.md)
1.  [SQL Assessment](./sql/07-assessment.md)

## IV. Node

0.  [Async Review](./node/00_async_review)
1.  [Command Line Node](./node/01_command_line_node)
1.  [Express Intro](./node/02_express_intro)
1.  [Express CRUD with Pug](./node/03_express_crud_pug)
1.  [Mongoose CRUD](./node/04_mongoose_crud)
1.  [Mongoose Associations](./node/05_mongoose_associations)
1.  [LinkedList Backend](./node/06_linkedlist_backend)

## V. MongoDB

1.  [MongoDB Fundamentals](./mongodb/01_fundamentals.md)

## VI. React

1.  [ES2015 Modules](./react/01_es2015_modules)
1.  [JSX and Babel](./react/02_jsx_babel)
1.  [Props](./react/03_props)
1.  [State](./react/04_state)
1.  [Events](./react/05_events)
1.  [Forms](./react/06_forms)
1.  [Lifecycle Methods](./react/07_lifecycle)
1.  [Todo List](./react/08_react_todo_list)
1.  [PropTypes and Testing](./react/09_proptypes_testing_todo)
1.  [React Router Vending Machine](./react/10_react_router_vending_machine)
1.  [React Router Calculator](./react/11_react_router_calculator)
1.  [React Router Dog Finder](./react/12_react_router_dog_finder)
1.  [React Router Color Factory](./react/13_react_router_color_factory)
1.  [React Router Todo List](./react/14_react_router_todo)
1.  [Redux](./react/15_redux)
1.  [React Redux Todo](./react/16_react_redux_todo)
1.  [CheeZJokesApp](./react/17_CheeZJokes_App)
1.  [React LinkedList Frontend](./react/18_linkedlist_frontend)
