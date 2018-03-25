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

* [00 Your First Pull Request](./intermediate-js/00-first-pull-request)
* [01 Big O Exercise](./intermediate-js/01-big-o)
* [02 Testing Exercise](./intermediate-js/02-testing)
* [03 Recursion Exercise](./intermediate-js/03-recursion)
* [04 CSS Positioning Exercise](./intermediate-js/04-css-positioning)
* [05 CSS Mockup Exercise](./intermediate-js/05-css-mocks)
* [06 Bootstrap Mockup Exercise](./intermediate-js/06-bootstrap-mocks)
* [07 jQuery Exercise](./intermediate-js/07-jquery)
* [08 AJAX with jQuery Exercise](./intermediate-js/08-ajax-jquery)
* [09 ES2015 Exercise](./intermediate-js/09-es2015)
* [10 Object Oriented Exercises](./intermediate-js/10-oop)

## II. Flask

### Unit 01 - Intro to Flask

* [01 Introduction To Flask](./flask/Unit-01/01-flask-intro)
* [02 Routing with Flask](./flask/Unit-01/02-flask-routing)
* [03 Templating with Jinja2](./flask/Unit-01/03-templating)
* [04 CRUD with Flask](./flask/Unit-01/04-flask-crud)
* [05 SQL Alchemy, Part I](./flask/Unit-01/05-sql-alchemy-1)
* [06 Migrations](./flask/Unit-01/06-migrations)
* [07 SQL Alchemy, Part II](./flask/Unit-01/07-sql-alchemy-2)
* [08 Testing With Flask](./flask/Unit-01/08-testing)
* [09 Server Side Validation with WTForms](./flask/Unit-01/09-forms)
* [10 Heroku](./flask/Unit-01/10-heroku)

### Unit 02 - Intermediate & Advanced Flask

* [01 Structuring Larger Flask Applications](./flask/Unit-02/01-blueprints)
* [02 Many to Many](./flask/Unit-02/02-many-to-many)
* [03 Hashing and Sessions](./flask/Unit-02/03-hashing-sessions)
* [04 Authentication with Flask Login](./flask/Unit-02/04-flask-login)
* [05 OAuth with Flask](./flask/Unit-02/05-oauth)

## III. SQL

* [01 SQL Fundamentals](./sql/01-fundamentals.md)
* [02 CRUD Operations](./sql/02-crud_operators.md)
* [03 Aggregates](./sql/03-aggregates.md)
* [04 Joins](./sql/04-joins.md)
* [05 Normalization](./sql/05-normalization.md)
* [06 Data Modeling](./sql/06-modeling.md)
* [07 SQL Assessment](./sql/07-assessment.md)

## IV. Node

* [00 - Async Review](./node/00_async_review)
* [01 - Command Line Node](./node/01_command_line_node)
* [02 - Express Intro](./node/02_express_intro)
* [03 - Express CRUD](./node/03_express_router)
* [04 - Mongoose CRUD](./node/04_mongoose_crud)
* [05 - Mongoose Associations](./node/05_mongoose_associations)
* [06 - LinkedList Backend](./node/06_linkedlist_backend)

## V. React

* [01 JSX and Babel](./react/01_jsx_babel)
* [02 Props](./react/02_props)
* [03 State](./react/03_state)
* [04 Events](./react/04_events)
* [05 Forms](./react/05_forms)
* [06 Lifecycle Methods](./react/06_lifecycle)
* [07 Todo List](./react/07_react_todo_list)
* [08 PropTypes and Testing](./react/08_proptypes_testing_todo)
* [09 React Router](./react/09_react_router)
* [10 React Router Todo List](./react/10_react_router_todo)
* [11 Redux](./react/11_redux)
* [12 React Redux Todo](./react/12_react_redux_todo)
* [13 React LinkedList Frontend](./react/13_linkedlist_frontend)
