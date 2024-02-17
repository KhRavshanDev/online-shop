const express = require('express');
const { route } = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Our Online Shop</h1>')
})

module.exports = router;