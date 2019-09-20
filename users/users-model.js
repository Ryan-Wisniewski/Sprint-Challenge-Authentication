const db = require('../database/dbConfig');

module.exports = {
  get,
  getById,
  getBy,
  insert,
  update,
  remove,
};

function get() {
  return db('users');
}

function getBy(filter) {
  return db('users').where(filter);
}

function getById(id) {
  return db('users')
    .where({ id })
    .first();
}

function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}