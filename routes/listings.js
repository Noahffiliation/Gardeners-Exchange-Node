var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');

router.get('/', rateLimit(), (req, res) =>{
	res.render('index', { title: 'Express' });
});

router.get('/create', (req, res) => {
	res.render('create', { title: 'Create' });
});

router.post('/create', (req, res) => {
	res.render('create', { title: 'Create' });
});

module.exports = router;
