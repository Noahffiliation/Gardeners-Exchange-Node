var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');

router.get('/', rateLimit(), (req, res) =>{
	res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
	res.render('login', { title: 'Login' });
});

router.get('/logout', (req, res) => {
	res.render('logout', { title: 'Logout' });
});

router.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

router.get('/testing', (req, res) => {
	res.render('testing', { title: 'Testing' });
});

module.exports = router;
