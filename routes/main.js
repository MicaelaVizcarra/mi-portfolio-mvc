const express = require('express');
const router = express.Router();
const {index, about} = require('../controllers/mainController')

router
    .get('/', index)
    .get('/about', about)

module.exports = router;