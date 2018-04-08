const mongoose = require('mongoose');

const { Owner, Animal } = require('../models');

/*
  Renders all owners
*/ exports.renderIndex = async function(req, res, next) {
  let owners;
  try {
    owners = await Owner.find({});
  } catch (err) {
    console.log(err.message);
  }
  res.render('owners/index', { owners });
};
/*
  Renders new owner page
*/
exports.renderNew = function(req, res, next) {
  res.render('owners/new');
};
/*
  requies target owner
  populates the 'animals' field in that object
  renders owner/show with owner and animals of that owner
*/

exports.renderShow = async function(req, res, next) {
  const ownerId = req.params.id;
  let owner;
  let animals;
  try {
    owner = await Owner.findById({ _id: ownerId })
      .populate('animals')
      .exec();
    animals = owner.animals;
  } catch (err) {
    console.log(err.message);
  }
  res.render('owners/show', { owner, animals });
};
/*
  queries owner id specified in params
  renders edit page passing in that owner
*/

exports.renderEdit = async function(req, res, next) {
  const ownerId = req.params.id;
  let owner;
  try {
    owner = await Owner.findById({ _id: ownerId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('owners/edit', { owner });
};
/*
  creates new owner from the request.body data
  redirects to owners
*/
exports.postNew = async function(req, res, next) {
  try {
    await Owner.create(req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/owners');
};
/*
  queries owner according to the id specified in the route
  updates that owner with the contents of the request body
  redirects to the specified owner's show page
*/
exports.updateItem = async function(req, res, next) {
  const ownerId = req.params.id;
  let owner;
  try {
    owner = await Owner.findByIdAndUpdate(ownerId, req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/owners/${owner.id}`);
};

/*
  removes owner specified
*/

exports.deleteItem = async function(req, res, next) {
  const ownerId = req.params.id;
  try {
    const owner = await Owner.findByIdAndRemove(ownerId);
    const animal = await Animal.remove({ owner: owner.id });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/owners');
};

// exports.search = async function(req, res, next) {
//   const searchQuery = req.query.search;
//   let owners;
//   try {
//     owners = await Owner.find({ name: searchQuery });
//   } catch (err) {
//     console.log(err.message);
//   }
//   res.render('owners/index', { owners });
// };
