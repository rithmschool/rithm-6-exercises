const express = require('express');
const router = express.Router();
const { users } = require('../handlers')
const { renderNewUserForm, createUser, readUsers, readUser, renderEditUserForm, updateUser, deleteUser } = users;

// all users at /users
router
  .route('') // this is equivalent to /users
  .get(readUsers)
  .post(createUser);

// create user form
router.route('/new').get(renderNewUserForm);

// edit user form
router.route('/:userId/edit').get(renderEditUserForm);

// users by ID routes /users/:id
router
  .route('/:userId')
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
