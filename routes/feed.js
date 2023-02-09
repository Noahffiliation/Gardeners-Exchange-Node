var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');
const Listing = require('../models/listing');

router.get('/', rateLimit(), (req, res, next) => {
	Listing.find({}, (err, listings) => {
		if (err) {
			return next(err);
		}
		res.render('feed', { feedItems: listings });
	});
});

router.post('/buy/:id/:amount', (req, res) => {
	res.render('buy', { title: 'Buy' });
});

module.exports = router;
