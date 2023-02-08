var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');

router.get('/', rateLimit(), (req, res) =>{
	res.render('index', { title: 'Express' });
});

router.post('/buy/:id/:amount', (req, res) => {
	res.render('buy', { title: 'Buy' });
});

module.exports = router;
