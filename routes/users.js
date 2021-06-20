const router = require('express').Router();
const UsersController = require('../controllers/users-controller');

router.route('/').post(UsersController.create);

module.exports = router;
