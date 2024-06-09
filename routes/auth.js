const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    return res.status(201).json({ 'name': 'Yamamoto', 'age': 29 });
});

router.post('/register', (req, res) => {
    // validate the request
    // tap into the database and create a user in the users collection in the database

});

router.post('/forgot-password', (req, res) => res.send('Forgot password route'));

router.post('/verify-otp', (req, res) => res.send('Verify email route'));

router.post('/reset-password', (req, res) => res.send('Reset password route'));

module.exports = router;