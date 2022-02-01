const router = require('express').Router();
// Bring in Users model
let User = require('../models/User.js');

// Get all users
router.route('/').get((req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
});

// Create a user with POST request
router.route('/register').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username })

    // Save newUser to database
    newUser.save()
        .then(() => res.json('User was added!'))
        .catch(e => res.status(400).json(e));
})

module.exports = router;
