# Rithm 6 Exercises

This is the master repository for all of Rithm School's sixth cohort's exercises.
Each student is assigned their own personal branch based on their first name to keep track of their progress.
Students can only push to their own branches.

## Exercise Workflow

### Getting Started

0. First clone the repository locally: `git clone git@github.com:rithmschool/rithm-6-exercises.git`.
1. Before you start work on an assignment, make sure the master branch of the repo is updated locally: `git checkout master` followed by `git pull`.
1. Then update your personal branch: `git checkout michael` followed by `git merge master`. This could _very rarely_ result in a merge conflict, which you can resolve using the built-in VSCode [merge conflict resolution tool](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts).

### Working on and Submitting Assignments

1. To start a new assignment, create a new branch off of your personal branch which must be **up-to-date-with-master** (see above): `git checkout -b michael-big-o-exercise`.
1. While working on the assignment, you may push your branch upstream so it lives on GitHub as well as locally: `git push -u origin michael-big-o-exercise`.
1. Complete your work on the assignment, committing as often as you see fit on that branch.
1. When your assignment is complete, make sure you push your changes (`git push` if you've set the upstream origin or `git push -u origin michael-big-o-exercise` if you haven't pushed before).
1. Next, open a pull request in GitHub. [Click here](https://help.github.com/articles/creating-a-pull-request/) for instructions on how to do that. The Pull Request **must be against your personal branch** otherwise we will reject it.
1. Instructors may offer feedback, request changes, or reject a pull request at their disgression. We will always cite reasons for requesting changes or rejecting.
1. If you need to make changes or open a new Pull Request, you may continue to push to the assignment branch while the PR is open. It will automatically update.
1. Once your PR has been approved, you should merge the assignment branch into your personal branch and subsequently delete the assignment branch in GitHub. Note: instructors may do this for you.
1. Repeat the above steps, making sure to keep your personal branch up to date with master.

### Rules, Guidelines, Caveats

1. There should only be 1 branch per assignment per person.
1. There should only be 1 assignment per branch.
1. Do not tamper with `.gitconfig` and `.gitignore` files that we've set up for you.
1. You can have several pull requests open simultaneously, but we will require that they be up-to-date with your personal branch before merging. This means once one of them is merged, the other PRs will need to be updated (this can be done easily via GitHub).
1. Please remember to delete your branches on GitHub once the assignment is complete, since there are so many of you!
1. Try to name your assignment branches with your name and the name of the assignment so we can keep track of them easily.
1. Try to have a reasonable number of commits per assignment (between 1 and 10 perhaps, depending on the complexity of the assignment).
1. (Advanced) You may "squash and merge" or rebase at your own risk if you want to keep your personal branch clean.
1. It is impossible for students to affect the code of the `master` or `solutions` branches so you don't need to worry about accidentally deleting things, etc.

## I. Intermediate & Advanced JavaScript

* [00 Your First Pull Request](./intermediate-js/00-first-pull-request)
* [01 Big O Exercise](./intermediate-js/01-big-o)
* [02 Testing Exercise](./intermediate-js/02-testing)
* [03 Recursion Exercise](./intermediate-js/03-recursion)
* [04 CSS Positioning Exercise](./intermediate-js/04-css-positioning)
* [05 Bootstrap Mockup Exercise](./intermediate-js/05-bootstrap-mocks)
* [06 jQuery Exercise](./intermediate-js/06-jquery)
* [07 AJAX with jQuery Exercise](./intermediate-js/07-ajax-jquery)
* [08 ES2015 Exercise](./intermediate-js/08-es2015)
* [09 Object Oriented Exercises](./intermediate-js/09-oop)

## II. Flask

### Unit 01 - Intro to Flask

* [01 Introduction To Flask](./flask/Unit-01/01-flask-intro/readme.md)
* [02 Routing with Flask](./flask/Unit-01/02-flask-routing/readme.md)
* [03 Templating with Jinja2](./flask/Unit-01/03-templating/readme.md)
* [04 CRUD with Flask](./flask/Unit-01/04-flask-crud/readme.md)
* [05 SQL With Flask and Postgres](./flask/Unit-01/05-sql-flask/readme.md)
* [06 SQL Alchemy, Part I](./flask/Unit-01/06-sql-alchemy-1/readme.md)
* [07 SQL Alchemy, Part II](./flask/Unit-01/07-sql-alchemy-2/readme.md)
* [08 Testing With Flask](./flask/Unit-01/08-testing/readme.md)
* [09 Server Side Validation with WTForms](./flask/Unit-01/09-forms/readme.md)

### Unit 02 - Intermediate & Advanced Flask

* [01 Structuring Larger Flask Applications](./flask/Unit-02/01-blueprints/readme.md)
* [02 Many to Many](./flask/Unit-02/02-many-to-many/readme.md)
* [03 Hashing and Sessions](./flask/Unit-02/03-hashing-sessions/readme.md)
* [04 Authentication with Flask Login](./flask/Unit-02/04-flask-login/readme.md)
* [05 OAuth with Flask](./flask/Unit-02/05-oauth/readme.md)

## III. SQL

* [01 SQL Fundamentals](./sql/01-fundamentals.md)
* [02 CRUD Operations](./sql/02-crud_operators.md)
* [03 Aggregates](./sql/03-aggregates.md)
* [04 Joins](./sql/04-joins.md)
* [05 Normalization](./sql/05-normalization.md)
* [06 Data Modeling](./sql/06-modeling.md)
* [07 SQL Assessment](./sql/07-assessment.md)

## IV. Node

## V. MongoDB

## VI. React

### Unit 01 Intro to React

* [01 Introduction To React](./react/Unit-01/01-introduction-to-react)
* [02 Props, State, and Component Architecture](./react/Unit-01/02-props-state-component-architecture)
* [03 Events, Forms, Refs, and Life Cycle](./react/Unit-01/03-events-forms-refs-life-cycle)
* [04 Final Project](./react/Unit-01/04-final-project/readme.md)

### Unit 02 Intermediate React, React Router, and Redux

* [01 Prop Types](./react/Unireact/t-02/02-prop-types/readme.md)
* [02 Testing](./react/Unit-02/02-testing/readme.md)
* [03 React Router](./react/Unit-02/03-react-router)
* [04 React Router (Continued)](./react/Unit-02/04-react-router-continued)
* [05 Redux](./react/Unit-02/05-redux)
* [06 React and Redux](./react/Unit-02/06-react-redux)
* [07 Full Stack React](./react/Unit-02/07-full-stack-react)
* [08 BONUS React Router](./react/Unit-02/08-bonus-react-router)
