const router = require('express').Router();

const db = require('./users-model.js');

router.get('/',  (req, res) => {
  db.get()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router