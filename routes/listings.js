var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit');
const Listing = require('../models/listing');

router.get('/:id', rateLimit(), (req, res) => {
	Listing.findById(req.params.id, (err, listing) => {
		if (err) {
			console.error(err);
			res.redirect('/');
		} else {
			res.render('listing', { listing: listing });
		}
	});
});

module.exports = router;
