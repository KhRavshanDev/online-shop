const express = require('express');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.send('<html><body><form action="/admin/add-user" method="POST"><input type="text" name="title"><button type="submit">Add User</button></form></body></html>')
})
router.post('/add-user', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;