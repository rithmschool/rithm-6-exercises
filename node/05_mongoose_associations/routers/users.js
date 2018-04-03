const express = require('express');
const router = express.Router();

const { users } = require('../handlers')

router
    .route('/')
    .get(users.seeUsers)
    .post(users.createUser)

router
    .route('/new')
    .get(users.newUser)

router  
    .route('/:userId/edit')
    .get(users.editUser)

router
    .route('/:userId')
    .get(users.seeUser)
    .patch(users.updateUser)
    .delete(users.deleteUser)

module.exports = router;