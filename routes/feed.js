var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');
const Listing = require('../models/listing');

router.get('/', rateLimit(), (req, res) => {
	Listing.find({}, (err, listings) => {
		if (err) {
			console.error(err);
		}
		res.render('feed', { feedItems: listings });
	});
});

module.exports = router;
