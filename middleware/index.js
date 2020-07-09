var express = require('express');
var auth = require('./auth');
var router = express.Router();

//Daftarkan menu register
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);


module.exports = router;