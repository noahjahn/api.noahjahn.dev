const router = require('express').Router();
const UsersController = require('./controller');

router.post('/', UsersController.create);

module.exports = router;
