const express = require('express')
const router = express.Router()

router.get('/', function(req,res) {
    res.render('auth/login');
})

router.get('/forgot', function(req,res) {
    res.render('auth/forgot');
})

module.exports = router