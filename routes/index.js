var express = require('express');
var router = express.Router();

const authController = require('../controllers/authentication');
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login').get(authController.login);

router.route('/signup').get(userController.createUser);


module.exports = router;
