const router = require('express').Router();
const UsersController = require('../controllers/UsersController');

router.route('/').post(UsersController.create);

module.exports = router;
