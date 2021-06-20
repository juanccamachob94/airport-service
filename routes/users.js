const router = require('express').Router();
const UsersController = require('../controllers/UsersController');

router.route('/').get(UsersController.index);
router.route('/create').post(UsersController.create);

module.exports = router;
