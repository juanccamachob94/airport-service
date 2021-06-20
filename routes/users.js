const router = require('express').Router();
const UsersController = require('../controllers/UsersController');

router.route('/create').post(UsersController.create);

module.exports = router;
