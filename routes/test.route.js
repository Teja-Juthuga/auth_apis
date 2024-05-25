const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    res.send("This is Test API :) ")
})

module.exports = router;