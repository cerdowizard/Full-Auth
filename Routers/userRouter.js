const router = require('express').Router();
const UserCtrl = require('../Controllers/UserCtrl')

router.post('/register', UserCtrl.register)

module.exports = router