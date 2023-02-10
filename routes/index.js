var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');

router.get('/', rateLimit(), (req, res) => {
	res.render('index');
});

module.exports = router;
